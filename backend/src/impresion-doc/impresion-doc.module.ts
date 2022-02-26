import { Module } from '@nestjs/common';
import { ImpresionDocService } from './impresion-doc.service';
import { ImpresionDocController } from './impresion-doc.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [ImpresionDocController],
  providers: [ImpresionDocService],
  imports: [AuditModule],
  exports: [ImpresionDocService],
})
export class ImpresionDocModule {}
