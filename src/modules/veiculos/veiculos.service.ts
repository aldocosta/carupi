import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VeiculosDTO } from './dto/veiculos.dto';
import { VeiculosDocument } from './veiculos.model';

@Injectable()
export class VeiculosService {

    constructor(
        @InjectModel('veiculos') private veiculosModel: Model<VeiculosDocument>
    ) { }

    async create(veiculoDto: VeiculosDTO) {
        const createdVeiculo = new this.veiculosModel(veiculoDto)
        return await createdVeiculo.save()
    }

    async update(id: string, veiculoDto: VeiculosDTO) {
        const oldVeiculo = await this.veiculosModel.findOne({
            _id: id
        })

        const object = veiculoDto;
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                if (key !== '_id')
                    oldVeiculo[key] = object[key];
            }
        }
        return await oldVeiculo.save()
    }

    async delete(veiculoId: string) {
        return await this.veiculosModel.deleteOne({ _id: veiculoId })
    }

    async find(query: any) {

        let precoVenda = {
            $gte: 3000,
            $lte: query.precoMin || 0
        }

        delete query.precoMax
        query.precoVenda = precoVenda
        console.log(query)
        return await this.veiculosModel.find(query)
    }

}
