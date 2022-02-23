import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuditModule } from 'src/audit/audit.module';
import { CajaModule } from 'src/caja/caja.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [AuditModule, CajaModule],
})
export class UserModule {}
