import { Test, TestingModule } from '@nestjs/testing';
import { Gr1Service } from './gr1.service';

describe('Gr1Service', () => {
  let service: Gr1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Gr1Service],
    }).compile();

    service = module.get<Gr1Service>(Gr1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
