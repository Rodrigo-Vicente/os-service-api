import { Injectable } from '@nestjs/common';
import { EquipamentoDto } from '../dto/equipamentoDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipamentoService {
  constructor(private prisma: PrismaService) {}
  createEquipamento(equipamentoDto: EquipamentoDto) {
    return this.prisma.equipamento.create({ data: equipamentoDto });
  }
  findEquipamentoByIdOrIndice(numeroId: number, indiceValue: string) {
    return this.prisma.equipamento.findMany({
      where: {
        numeroOS: Number(numeroId),
        OR: [
          {
            indice: {
              endsWith: indiceValue,
            },
          },
        ],
      },
    });
  }
  findEquipamento(numeroId: number) {
    return this.prisma.equipamento.findUnique({
      where: { numeroOS: numeroId },
    });
  }
  findEquipamentoByDescricao(descricao: string) {
    return this.prisma.equipamento.findMany({
      where: {
        OR: [
          {
            Descricao: { contains: descricao },
          },
        ],
      },
    });
  }
}
