import { Injectable } from '@nestjs/common';


import { Command, CommandRunner, Option } from 'nest-commander';
import { SearchService } from '@pakasa/search/search.service';

interface BuildIndexCommandOptions {
  string?: string;
}

@Command({ name: 'build-search-index', description: 'Build search index of the pages' })
export class BuildIndexCommand extends CommandRunner {
  constructor(private readonly searchService: SearchService) {
    super()
  }

  async run(
    params: string[],
    options?: BuildIndexCommandOptions,
  ): Promise<void> {
    return this.searchService.buildIndex(params?.[0], options);
  }
}

