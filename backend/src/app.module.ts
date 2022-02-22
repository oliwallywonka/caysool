import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuditModule } from './audit/audit.module';
import { ClientModule } from './client/client.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { InventarioModule } from './inventario/inventario.module';
import { AmortizacionModule } from './amortizacion/amortizacion.module';
import { BusinessModule } from './business/business.module';
import { PictureModule } from './picture/picture.module';
import { ImpresionDocModule } from './impresion-doc/impresion-doc.module';
import { PagoModule } from './pago/pago.module';
import { CajaModule } from './caja/caja.module';
import { AperturaModule } from './apertura/apertura.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationModule } from './notification/notification.module';
import { TransaccionMonedaModule } from './transaccion-moneda/transaccion-moneda.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    /*ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),*/
    UserModule,
    AuthModule,
    AuditModule,
    ClientModule,
    PrestamoModule,
    InventarioModule,
    AmortizacionModule,
    BusinessModule,
    PictureModule,
    ImpresionDocModule,
    PagoModule,
    CajaModule,
    AperturaModule,
    MovimientoModule,
    NotificationModule,
    TransaccionMonedaModule,
  ],
})
export class AppModule {}
