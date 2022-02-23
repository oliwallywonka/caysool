import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AuditService } from 'src/audit/audit.service';
import fs = require('fs');
import { Connection } from 'typeorm';
import { CajaService } from 'src/caja/caja.service';
@Injectable()
export class UserService {
  constructor(
    private readonly auditService: AuditService,
    private readonly cajaService: CajaService,
    private connection: Connection,
  ) {
    this.createDefaultUser();
  }

  async createDefaultUser() {
    const queryRunner = this.connection.createQueryRunner();
    const user = await User.find();
    if (user.length === 0) {
      const newUser = new User();
      newUser.ci = '123456';
      newUser.password = '123456';
      newUser.name = 'Usuario Admin Prueba';
      newUser.phone = '12345678';
      await newUser.save();
      await this.cajaService.createDefaulCaja();
    }
    await queryRunner.release();
  }

  async uploadImage(id: number, file: Express.Multer.File) {
    const userFound = await this.findOne(id);
    if (userFound.picture) fs.unlinkSync(`${userFound.picture}`);
    userFound.picture = file.path;
    await userFound.save();
    return { message: 'Imagen guardada satisfactoriamente' };
  }

  async create(createUserDto: CreateUserDto, auditUser) {
    await this.validateCiUnique(createUserDto.ci);
    const user = User.create(createUserDto);
    const userSaved = await User.save(user);
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'USUARIOS',
      previusData: {},
      actualData: {
        name: createUserDto.name,
        ci: createUserDto.ci,
        phone: createUserDto.phone,
      },
      user: auditUser,
    });
    return userSaved;
  }

  async findUserByCi(ci: string) {
    const user = await User.createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.ci = :ci', { ci })
      .getOne();
    return user;
  }

  async findAll(options: IPaginationOptions, ci: string) {
    const users = User.createQueryBuilder('user')
      //.where('user.isActive = :isActive', { isActive: true })
      .where(`user.ci LIKE '%${ci ? ci : ''}%'`)
      .orderBy('user.id', 'DESC');
    return await paginate<User>(users, options);
  }

  async findOne(id: number) {
    const user = await User.findOne({ id });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto, auditUser) {
    const user = await User.findOne({ id });
    const prevUser = { ...user };
    if (!user)
      throw new BadRequestException({ message: 'Usuario no encontrado ' });
    await this.validateCiUnique(updateUserDto.ci, id);
    User.merge(user, updateUserDto);
    await user.save();
    this.auditService.audit({
      action: `Se Edito el registro ${id}`,
      auditTable: 'USUARIOS',
      previusData: prevUser,
      actualData: updateUserDto,
      user: auditUser,
    });
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async validateCiUnique(ci: string, id = -1) {
    const ciExist = await this.findUserByCi(ci);
    if (id !== -1) {
      if (ciExist && ciExist.id !== id)
        throw new BadRequestException({
          message: 'El CI introducido ya existe',
        });
    } else {
      if (ciExist)
        throw new BadRequestException({
          message: 'El CI introducido ya existe',
        });
    }
  }
}
