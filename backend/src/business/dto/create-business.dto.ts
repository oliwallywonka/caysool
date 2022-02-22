import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBusinessDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  nit: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  direction: string;

  @IsOptional()
  @IsNumber()
  comission: number;

  @IsOptional()
  @IsNumber()
  interest: number;

  @IsOptional()
  @IsNumber()
  cambioDolar: number;
}
