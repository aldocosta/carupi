import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeiculosController } from './veiculos.controller';
import { VeiculosSchema } from './veiculos.model';
import { VeiculosService } from './veiculos.service';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: 'veiculos', schema: VeiculosSchema }])
    ],
    controllers:[VeiculosController],
    providers:[VeiculosService]
})
export class VeiculosModule {}
