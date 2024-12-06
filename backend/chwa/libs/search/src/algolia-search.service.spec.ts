import { Test, TestingModule } from '@nestjs/testing';
import { AlgoliaSearchService } from './algolia-search.service';

describe('AlgoliaSearchClientService', () => {
  let service: AlgoliaSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlgoliaSearchService],
    }).compile();

    service = module.get<AlgoliaSearchService>(AlgoliaSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
