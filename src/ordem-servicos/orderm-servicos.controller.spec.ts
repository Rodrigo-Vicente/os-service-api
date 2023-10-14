import { Test, TestingModule } from '@nestjs/testing';
import { OrdermServicosController } from './orderm-servicos.controller';
import { OrdermServicosService } from './orderm-servicos.service';

describe('OrdermServicosController', () => {
  let controller: OrdermServicosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdermServicosController],
      providers: [OrdermServicosService],
    }).compile();

    controller = module.get<OrdermServicosController>(OrdermServicosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
