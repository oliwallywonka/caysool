import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Client } from 'src/client/entities/client.entity';
import { Inventario } from 'src/inventario/entities/inventario.entity';
import { User } from 'src/user/entities/user.entity';
export class CreatePrestamoDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  user: User;

  @IsNotEmpty()
  @IsInt()
  client: Client;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsNotEmpty()
  @IsString()
  fechaInicio: string;

  @IsNotEmpty()
  @IsString()
  fechaLimite: string;

  @IsNotEmpty()
  @IsString()
  fechaFinal: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @Type(() => Inventario)
  inventario: Inventario[];
}
