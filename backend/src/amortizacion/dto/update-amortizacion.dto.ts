import { PartialType } from '@nestjs/mapped-types';
import { CreateAmortizacionDto } from './create-amortizacion.dto';

export class UpdateAmortizacionDto extends PartialType(CreateAmortizacionDto) {}
