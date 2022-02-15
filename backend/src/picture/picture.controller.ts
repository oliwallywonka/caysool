import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PictureService } from './picture.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { saveImageToStorage } from 'src/helpers/image-storage';

@Controller('api/picture')
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':idInventario')
  @UseInterceptors(FileInterceptor('picture', saveImageToStorage('inventario')))
  create(
    @Param('idInventario') idInventario: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.pictureService.create(+idInventario, file);
  }

  @Get(':idInventario')
  findAll(@Param('idInventario') idInventario: string) {
    return this.pictureService.findAll(+idInventario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pictureService.remove(+id);
  }
}
