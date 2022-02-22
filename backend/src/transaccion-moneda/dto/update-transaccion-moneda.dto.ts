import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccionMonedaDto } from './create-transaccion-moneda.dto';

export class UpdateTransaccionMonedaDto extends PartialType(CreateTransaccionMonedaDto) {}
