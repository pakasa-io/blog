import { Inject, Injectable } from '@nestjs/common';
import { Algoliasearch } from 'algoliasearch';
import { ALGOLIA_SEARCH_CLIENT } from '@pakasa/third-party/symbols';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AlgoliaSearchService {
  private client: Algoliasearch
  constructor(
    private readonly ccm: ConfigService,
    @Inject(ALGOLIA_SEARCH_CLIENT)
    private readonly AlgoliaSearchClient: (...a :any[]) => Algoliasearch,
  ) {
    this.client = AlgoliaSearchClient(
      this.ccm.get('ALGOLIA_API_ID'),
      this.ccm.get('ALGOLIA_WRITE_API_KEY')
    )
  }

  async load(data: any[]){
    return this.client.saveObjects({
      indexName: this.ccm.get('ALGOLIA_PRIMARY_INDEX'),
      objects: data,
      waitForTasks: true
    })
  }
}
