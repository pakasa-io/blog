import { Injectable } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';
import { SearchService } from '@pakasa/search';
import { ConfigService } from '@nestjs/config';

type NewPageCommandOptions = {
  format?: string,
}

@Command({ name: 'new-blog-post', description: 'Create a new hugo blog post page' })
export class NewBlogPostCommand extends CommandRunner {
  constructor(private readonly ccm: ConfigService) {
    super()
  }

  async run(
    params: string[],
    options?: NewPageCommandOptions,
  ): Promise<void> {

  }
}
