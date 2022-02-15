import { BadRequestException, Injectable } from '@nestjs/common';
import { Picture } from './entities/picture.entity';
import fs = require('fs');
import { Inventario } from 'src/inventario/entities/inventario.entity';
@Injectable()
export class PictureService {
  async create(idInventario: number, file: Express.Multer.File) {
    const inventario = await Inventario.findOne({ id: idInventario });
    if (!inventario)
      throw new BadRequestException({ message: 'Inventario no encontrado' });
    const picture = new Picture();
    picture.inventario = inventario;
    picture.name = file.originalname;
    picture.path = file.path;
    await picture.save();
    return { message: 'Imagen registrada exitosamente' };
  }

  async findAll(idInventario: number) {
    const pictures = await Picture.createQueryBuilder('picture')
      .leftJoinAndSelect('picture.inventario', 'inventario')
      .where('inventario.id = :idInventario', { idInventario })
      .getMany();
    return pictures;
  }

  async remove(id: number) {
    const pictureFound = await Picture.findOne(id);
    if (!pictureFound)
      throw new BadRequestException({ message: 'Fotografia no encontrada' });
    fs.unlinkSync(pictureFound.path);
    await pictureFound.remove();
    return { message: 'Imagen Eliminada exitosamente' };
  }
}
