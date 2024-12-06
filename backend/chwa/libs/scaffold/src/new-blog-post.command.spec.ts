import { Test, TestingModule } from '@nestjs/testing';
import { NewBlogPostCommand } from './new-blog-post.command';

describe('ScaffoldService', () => {
  let service: NewBlogPostCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewBlogPostCommand],
    }).compile();

    service = module.get<NewBlogPostCommand>(NewBlogPostCommand);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
