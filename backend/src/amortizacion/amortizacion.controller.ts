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
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AmortizacionService } from './amortizacion.service';
import { CreateAmortizacionDto } from './dto/create-amortizacion.dto';
import { UpdateAmortizacionDto } from './dto/update-amortizacion.dto';

@Controller('api/amortizacion')
export class AmortizacionController {
  constructor(private readonly amortizacionService: AmortizacionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createAmortizacionDto: CreateAmortizacionDto) {
    return this.amortizacionService.create(createAmortizacionDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('prestamo/:prestamoId')
  findAll(@Param('prestamoId') prestamoId: string) {
    return this.amortizacionService.findByPrestamoId(+prestamoId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amortizacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAmortizacionDto: UpdateAmortizacionDto,
  ) {
    return this.amortizacionService.update(+id, updateAmortizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amortizacionService.remove(+id);
  }
}
