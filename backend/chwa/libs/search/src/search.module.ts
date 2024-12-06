import { Module } from '@nestjs/common';
import { ThirdPartyModule } from '@pakasa/third-party';
import { SearchService } from './search.service';
import { BuildIndexCommand } from './build-index.command';
import { FrontMatterService } from './front-matter.service';
import { AlgoliaSearchService } from './algolia-search.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ThirdPartyModule, ConfigModule.forRoot()
  ],
  providers: [
    SearchService,
    BuildIndexCommand,
    FrontMatterService,
    AlgoliaSearchService,
  ],
  exports: [
    BuildIndexCommand,
    SearchService
  ],
})
export class SearchModule {}
