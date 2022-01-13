import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VeiculoDocument = Veiculos & Document;

@Schema()
export class Veiculos {  
  @Prop()
  marca: string;

  @Prop()
  model: string;

  @Prop()
  versao: string;

  @Prop()
  tipoCambio: string;

  @Prop()
  precoVenda: number;

  @Prop()
  quilometragem: number;

  @Prop()
  ano: number;
}


const _VeiculosSchema = SchemaFactory.createForClass(Veiculos)
_VeiculosSchema.plugin(require('mongoose-paginate'))

export const VeiculoSchema = _VeiculosSchema
