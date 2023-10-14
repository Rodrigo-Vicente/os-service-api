import { Test, TestingModule } from '@nestjs/testing';
import { EnderecoServiceService } from './equipamento-service.service';

describe('EnderecoServiceService', () => {
  let service: EnderecoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnderecoServiceService],
    }).compile();

    service = module.get<EnderecoServiceService>(EnderecoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
