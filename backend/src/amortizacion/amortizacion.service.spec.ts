import { Test, TestingModule } from '@nestjs/testing';
import { AmortizacionService } from './amortizacion.service';

describe('AmortizacionService', () => {
  let service: AmortizacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmortizacionService],
    }).compile();

    service = module.get<AmortizacionService>(AmortizacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
