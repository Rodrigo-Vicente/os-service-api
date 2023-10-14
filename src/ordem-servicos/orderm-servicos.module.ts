import { Module } from '@nestjs/common';
import { OrdermServicosService } from './orderm-servicos.service';
import { OrdermServicosController } from './orderm-servicos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EquipamentoService } from './equipamento-service/equipamento-service.service';
import { EquipamentoServiceController } from './equipamento-service.controller';

@Module({
  controllers: [OrdermServicosController, EquipamentoServiceController],
  providers: [OrdermServicosService, EquipamentoService],
  imports: [PrismaModule],
})
export class OrdermServicosModule {}
