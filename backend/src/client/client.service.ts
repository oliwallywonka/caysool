import { BadRequestException, Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AuditService } from 'src/audit/audit.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(private readonly auditService: AuditService) {}

  async create(createClientDto: CreateClientDto, user) {
    await this.validateCiUnique(createClientDto.ci);
    const client = Client.create(createClientDto);
    const clientSaved = await Client.save(client);
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'CLIENTES',
      previusData: {},
      actualData: clientSaved,
      user: user,
    });
    return clientSaved;
  }

  async findAll(options: IPaginationOptions, ci: string) {
    const clients = Client.createQueryBuilder('client').where(
      `client.ci LIKE '%${ci ? ci : ''}%'`,
    );
    return await paginate<Client>(clients, options);
  }

  async findOne(id: number) {
    const client = await Client.findOne(id);
    if (!client)
      throw new BadRequestException({ message: 'Cliente no encontrado' });
    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto, user) {
    const client = await Client.findOne({ id });
    const prevClient = { ...client };
    if (!client)
      throw new BadRequestException({ message: 'Cliente no encontrado' });
    await this.validateCiUnique(updateClientDto.ci, id);
    Client.merge(client, updateClientDto);
    await client.save();
    this.auditService.audit({
      action: `Se edito el registro ${id}`,
      auditTable: 'CLIENTES',
      previusData: prevClient,
      actualData: updateClientDto,
      user: user,
    });
    return client;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  async findClientByCi(ci: string) {
    const client = await Client.createQueryBuilder('client')
      .where('client.ci = :ci', { ci })
      .getOne();
    return client;
  }

  async validateCiUnique(ci: string, id = -1) {
    const ciExist = await this.findClientByCi(ci);
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
