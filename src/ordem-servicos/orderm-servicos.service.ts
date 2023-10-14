import { Injectable } from '@nestjs/common';
import { CreateOrdermServicoDto } from './dto/create-orderm-servico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdermServicosService {
  constructor(private prisma: PrismaService) {}
  create(createOrdermServicoDto: CreateOrdermServicoDto) {
    return this.prisma.ordemServico.create({ data: createOrdermServicoDto });
  }

  findAll() {
    return this.prisma.ordemServico.findMany();
  }

  findOne(numeroId: number) {
    return this.prisma.ordemServico.findUnique({ where: { numero: numeroId } });
  }
}
