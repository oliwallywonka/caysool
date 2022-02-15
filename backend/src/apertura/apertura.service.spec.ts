import { Test, TestingModule } from '@nestjs/testing';
import { AperturaService } from './apertura.service';

describe('AperturaService', () => {
  let service: AperturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AperturaService],
    }).compile();

    service = module.get<AperturaService>(AperturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
