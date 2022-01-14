import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosController } from './veiculos.controller';
import { VeiculosService } from './veiculos.service';

jest.mock('./veiculos.service')

describe('VeiculosController', () => {
  let controller: VeiculosController;
  let userService: VeiculosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeiculosController],
      providers: [VeiculosService]
    }).compile();

    controller = module.get<VeiculosController>(VeiculosController);
    userService = module.get<VeiculosService>(VeiculosService);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
