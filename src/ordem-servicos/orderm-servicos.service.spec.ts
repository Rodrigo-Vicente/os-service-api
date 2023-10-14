import { Test, TestingModule } from '@nestjs/testing';
import { OrdermServicosService } from './orderm-servicos.service';

describe('OrdermServicosService', () => {
  let service: OrdermServicosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdermServicosService],
    }).compile();

    service = module.get<OrdermServicosService>(OrdermServicosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
