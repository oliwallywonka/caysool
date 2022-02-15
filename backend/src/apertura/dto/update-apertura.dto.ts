import { PartialType } from '@nestjs/mapped-types';
import { CreateAperturaDto } from './create-apertura.dto';

export class UpdateAperturaDto extends PartialType(CreateAperturaDto) {}
