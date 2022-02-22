import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateTransaccionMonedaDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  user: User;

  @IsNotEmpty()
  @IsNumber()
  operacion: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  tipoCambio: number;

  @IsNotEmpty()
  @IsNumber()
  tipoCambioOficial: number;
}
