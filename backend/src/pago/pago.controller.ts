import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PagoService } from './pago.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/pago')
export class PagoController {
  constructor(private readonly pagoService: PagoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createPagoDto: CreatePagoDto) {
    return this.pagoService.create(createPagoDto, req.user);
  }

  @Get('/prestamo/:prestamoId')
  findAll(@Param('prestamoId') prestamoId: string) {
    return this.pagoService.findByPrestamoId(+prestamoId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagoDto: UpdatePagoDto) {
    return this.pagoService.update(+id, updatePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagoService.remove(+id);
  }
}
