import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionMonedaController } from './transaccion-moneda.controller';
import { TransaccionMonedaService } from './transaccion-moneda.service';

describe('TransaccionMonedaController', () => {
  let controller: TransaccionMonedaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransaccionMonedaController],
      providers: [TransaccionMonedaService],
    }).compile();

    controller = module.get<TransaccionMonedaController>(TransaccionMonedaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
