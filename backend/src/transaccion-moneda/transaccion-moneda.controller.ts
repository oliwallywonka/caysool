import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TransaccionMonedaService } from './transaccion-moneda.service';
import { CreateTransaccionMonedaDto } from './dto/create-transaccion-moneda.dto';
import { UpdateTransaccionMonedaDto } from './dto/update-transaccion-moneda.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/transaccion-moneda')
export class TransaccionMonedaController {
  constructor(
    private readonly transaccionMonedaService: TransaccionMonedaService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req,
    @Body() createTransaccionMonedaDto: CreateTransaccionMonedaDto,
  ) {
    return this.transaccionMonedaService.create(
      createTransaccionMonedaDto,
      req.user,
    );
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return this.transaccionMonedaService.findAll({ page, limit });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transaccionMonedaService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransaccionMonedaDto: UpdateTransaccionMonedaDto,
  ) {
    return this.transaccionMonedaService.update(
      +id,
      updateTransaccionMonedaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transaccionMonedaService.remove(+id);
  }
}
