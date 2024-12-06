import { Module } from '@nestjs/common';
import { NewBlogPostCommand } from './new-blog-post.command';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [NewBlogPostCommand],
  exports: [NewBlogPostCommand],
})
export class ScaffoldModule {}
