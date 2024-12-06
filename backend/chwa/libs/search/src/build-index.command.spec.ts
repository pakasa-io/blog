import { Test, TestingModule } from '@nestjs/testing';
import { BuildIndexCommand } from './build-index.command';

describe('BuildIndexCommandService', () => {
  let service: BuildIndexCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildIndexCommand],
    }).compile();

    service = module.get<BuildIndexCommand>(BuildIndexCommand);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
