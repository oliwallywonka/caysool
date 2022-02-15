import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmortizacionService } from './amortizacion.service';
import { CreateAmortizacionDto } from './dto/create-amortizacion.dto';
import { UpdateAmortizacionDto } from './dto/update-amortizacion.dto';

@Controller('amortizacion')
export class AmortizacionController {
  constructor(private readonly amortizacionService: AmortizacionService) {}

  @Post()
  create(@Body() createAmortizacionDto: CreateAmortizacionDto) {
    return this.amortizacionService.create(createAmortizacionDto);
  }

  @Get()
  findAll() {
    return this.amortizacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amortizacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmortizacionDto: UpdateAmortizacionDto) {
    return this.amortizacionService.update(+id, updateAmortizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amortizacionService.remove(+id);
  }
}
