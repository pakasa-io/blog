import { Module } from '@nestjs/common';
import { BuildIndexCommand, SearchModule } from '@pakasa/search';
import { ThirdPartyModule } from '@pakasa/third-party';

@Module({
  imports: [ThirdPartyModule, SearchModule],
  providers: [BuildIndexCommand],
})
export class AppModule {}
