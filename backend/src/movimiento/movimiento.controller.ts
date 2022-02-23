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
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/movimiento')
export class MovimientoController {
  constructor(private readonly movimientoService: MovimientoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createMovimientoDto: CreateMovimientoDto) {
    return this.movimientoService.create(createMovimientoDto, req.user);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit = 20,
    @Query('aperturaId') aperturaId: string,
  ) {
    return this.movimientoService.findAllByAperturaId(
      { page, limit },
      +aperturaId,
    );
  }

  @Get('apertura/:aperturaId')
  findOne(@Param('aperturaId') aperturaId: string) {
    return this.movimientoService.findByAperturaId(+aperturaId);
  }

  @Patch(':id')
  updateEstadoApertura(
    @Param('id') id: string,
    @Body() updateMovimientoDto: UpdateMovimientoDto,
  ) {
    return this.movimientoService.update(+id, updateMovimientoDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMovimientoDto: UpdateMovimientoDto,
  ) {
    return this.movimientoService.update(+id, updateMovimientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimientoService.remove(+id);
  }
}
