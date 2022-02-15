import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AperturaService } from './apertura.service';
import { CreateAperturaDto } from './dto/create-apertura.dto';
import { UpdateAperturaDto } from './dto/update-apertura.dto';

@Controller('apertura')
export class AperturaController {
  constructor(private readonly aperturaService: AperturaService) {}

  @Post()
  create(@Body() createAperturaDto: CreateAperturaDto) {
    return this.aperturaService.create(createAperturaDto);
  }

  @Get()
  findAll() {
    return this.aperturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aperturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAperturaDto: UpdateAperturaDto) {
    return this.aperturaService.update(+id, updateAperturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aperturaService.remove(+id);
  }
}
