import { Test, TestingModule } from '@nestjs/testing';
import { Gr1Controller } from './gr1.controller';

describe('Gr1Controller', () => {
  let controller: Gr1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Gr1Controller],
    }).compile();

    controller = module.get<Gr1Controller>(Gr1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
