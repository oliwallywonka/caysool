import { Test, TestingModule } from '@nestjs/testing';
import { AmortizacionController } from './amortizacion.controller';
import { AmortizacionService } from './amortizacion.service';

describe('AmortizacionController', () => {
  let controller: AmortizacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmortizacionController],
      providers: [AmortizacionService],
    }).compile();

    controller = module.get<AmortizacionController>(AmortizacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
