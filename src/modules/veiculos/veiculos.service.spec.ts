import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { veiculoStub } from './test/stubs/veiculos.stubs';
import { VeiculosService } from './veiculos.service';
import { VeiculosDTO } from './dto/veiculos.dto';

describe('VeiculosService', () => {
  let service: VeiculosService;  

  beforeEach(async () => {    

    class EventModel {
      constructor(private data) {
        this.data = veiculoStub()
      }
      save = jest.fn().mockResolvedValue(this.data);
      static find = jest.fn().mockResolvedValue([veiculoStub()]);
      static findOne = jest.fn().mockResolvedValue(veiculoStub());
      static findOneAndUpdate = jest.fn().mockResolvedValue(veiculoStub());
      static deleteOne = jest.fn().mockResolvedValue({ deletedCount: 1 });
      static update = jest.fn().mockResolvedValue(veiculoStub());
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VeiculosService,
        {
          provide: getModelToken('veiculos'),
          useValue: EventModel
        }
      ],
    }).compile();

    service = module.get<VeiculosService>(VeiculosService);
  });

  it('should be defined..', () => {
    expect(service).toBeDefined();
  });


  it('test save', async () => {
    const d: VeiculosDTO = {
      "ano": 2017,
      "quilometragem": 3000,
      "precoVenda": 4500,
      "tipoCambio": "automatico",
      "versao": "lt",
      "model": "leaf",
      "marca": "nissan"
    }

    const ret = await service.create(d)

    expect(ret).toEqual(d)
  });

  it('test find', async () => {

    const d: VeiculosDTO = {
      "ano": 2017,
      "quilometragem": 3000,
      "precoVenda": 4500,
      "tipoCambio": "automatico",
      "versao": "lt",
      "model": "leaf",
      "marca": "nissan"
    }

    const ret = await service.find({ ano: 2017 })

    expect(ret).toEqual([d])
  })

  it('test delete', async () => {

    const d: VeiculosDTO = {
      "ano": 2017,
      "quilometragem": 3000,
      "precoVenda": 4500,
      "tipoCambio": "automatico",
      "versao": "lt",
      "model": "leaf",
      "marca": "nissan"
    }

    const ret = await service.delete("123")

    expect(ret.deletedCount).toBeGreaterThan(0)
  })


  it('test update', async () => {

    const d: VeiculosDTO = {
      "ano": 2017,
      "quilometragem": 3000,
      "precoVenda": 4500,
      "tipoCambio": "automatico",
      "versao": "lt",
      "model": "leaf",
      "marca": "nissan"
    }

    const ret = await service.update("123", d)

    expect(ret).toEqual(d)
  })

});
