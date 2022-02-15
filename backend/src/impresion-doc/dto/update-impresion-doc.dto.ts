import { PartialType } from '@nestjs/mapped-types';
import { CreateImpresionDocDto } from './create-impresion-doc.dto';

export class UpdateImpresionDocDto extends PartialType(CreateImpresionDocDto) {}
