import { ConsoleLogger, Injectable } from '@nestjs/common';
import { FrontMatterService } from '@pakasa/search/front-matter.service';
import { AlgoliaSearchService } from '@pakasa/search/algolia-search.service';
import { readdir, readFile } from 'node:fs/promises';
import * as path from 'path';
import { isEmpty, isNil, pick } from 'lodash';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SearchService {
  private readonly logger = new ConsoleLogger(SearchService.name);

  constructor(
    private readonly ccm: ConfigService,
    private readonly algoliaSearchService: AlgoliaSearchService,
    private readonly frontMatterService: FrontMatterService,
  ) {
  }

  async buildIndex(src: string, opts?: any) {
    if (isEmpty(src)) {
      this.logger.error('Missing valid content source directory');
      return;
    }

    const records = await this.read(src);
    this.logger.log(`Indexing ${records.length} records`);
    await this.algoliaSearchService.load(records);
  }

  async read(src: string): Promise<Record<string, any>[]> {
    const files = await readdir(src, { recursive: true, withFileTypes: true });

    const ops = files.map(async (file): Promise<Record<string, any>> => {
      if (file.isDirectory()) return;

      const content = await readFile(path.resolve(file.parentPath, file.name));
      const parsed = this.frontMatterService.process(content?.toString(), { excerpt: 2 });

      if (this.isSkip(parsed.data)) return null;

      const indexedAttrs = JSON.parse(this.ccm.get('ALGOLIA_PRIMARY_INDEX_FIELDS'));

      return pick({
        ...parsed.data,
        subtitle: parsed.data?.subtitle || parsed.excerpt,
        objectID: parsed.data?.title,
      }, ...indexedAttrs, 'objectID' );
    });

    const records = await Promise.all(ops);
    return records.filter(r => r);
  }

  protected isSkip(data: Record<string, any>): boolean {
    return isNil(data)
      || data.draft
      || !data.searchable
  }
}
