import { Module } from '@nestjs/common';
import { algoliasearch } from 'algoliasearch';
import graymatter from 'gray-matter';
import { ALGOLIA_SEARCH_CLIENT, GRAY_MATTER } from '@pakasa/third-party/symbols';

@Module({
  providers: [
    { provide: GRAY_MATTER, useValue: graymatter },
    { provide: ALGOLIA_SEARCH_CLIENT, useValue: algoliasearch }
  ],
  exports: [
    ALGOLIA_SEARCH_CLIENT,
    GRAY_MATTER
  ],
})

export class ThirdPartyModule {}

function registerFactory(dep: any){
  return {
    provide: dep,
    useFactory: (...args) => new dep(...args)
  }
}

function registerFunction(dep: any) {
  return {
    provide: dep,
    useValue: dep
  }
}