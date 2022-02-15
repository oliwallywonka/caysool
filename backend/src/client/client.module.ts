import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [AuthModule, AuditModule],
})
export class ClientModule {}
