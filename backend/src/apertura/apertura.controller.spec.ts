import { Test, TestingModule } from '@nestjs/testing';
import { AperturaController } from './apertura.controller';
import { AperturaService } from './apertura.service';

describe('AperturaController', () => {
  let controller: AperturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AperturaController],
      providers: [AperturaService],
    }).compile();

    controller = module.get<AperturaController>(AperturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
