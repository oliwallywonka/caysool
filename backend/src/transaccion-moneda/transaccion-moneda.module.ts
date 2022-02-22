import { Module } from '@nestjs/common';
import { TransaccionMonedaService } from './transaccion-moneda.service';
import { TransaccionMonedaController } from './transaccion-moneda.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [TransaccionMonedaController],
  providers: [TransaccionMonedaService],
  imports: [AuditModule],
})
export class TransaccionMonedaModule {}
