import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionMonedaService } from './transaccion-moneda.service';

describe('TransaccionMonedaService', () => {
  let service: TransaccionMonedaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransaccionMonedaService],
    }).compile();

    service = module.get<TransaccionMonedaService>(TransaccionMonedaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
