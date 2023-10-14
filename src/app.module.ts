import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrdermServicosModule } from './ordem-servicos/orderm-servicos.module';

@Module({
  imports: [PrismaModule, OrdermServicosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
