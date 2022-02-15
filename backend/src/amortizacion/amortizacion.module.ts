import { Module } from '@nestjs/common';
import { AmortizacionService } from './amortizacion.service';
import { AmortizacionController } from './amortizacion.controller';

@Module({
  controllers: [AmortizacionController],
  providers: [AmortizacionService]
})
export class AmortizacionModule {}
