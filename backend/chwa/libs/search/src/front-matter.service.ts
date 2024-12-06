import { Inject, Injectable } from '@nestjs/common';
import { GRAY_MATTER } from '@pakasa/third-party/symbols';

@Injectable()
export class FrontMatterService {
  constructor(
    @Inject(GRAY_MATTER)
    private readonly graymatter: (data: string, opts?: Record<string, any>) => any
  ) {
  }

  process(input: string, opts: Record<string, any> = {}){
    return this.graymatter(input, opts)
  }
}
