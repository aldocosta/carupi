import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";


export class VeiculosDTO {    

  @IsNotEmpty({message:'Campo marca é obrigatório'})  
  @ApiProperty({
    description: 'Marca do veiculo',
    example: 'Fiat'
  })
  marca: string;
 
  @IsNotEmpty({message:'Campo model é obrigatório'})
  @ApiProperty({
    description: 'Modelo do veiculo',
    example: 'Argo'
  })
  model: string;
 
  @IsNotEmpty({message:'Campo versao é obrigatório'})
  @ApiProperty({
    description: 'Versão do veiculo',
    example: 'XS'
  })
  versao: string;
 
  @IsNotEmpty({message:'Campo tipoCambio é obrigatório'})
  @ApiProperty({
    description: 'Tipo de Cambio do veiculo',
    example: 'Manual'
  })
  tipoCambio: string;
 
  @IsNotEmpty({message:'Campo precoVenda é obrigatório'})
  @IsNumber({},{message:'Campo precoVenda deve ser numérico'})
  @ApiProperty({
    description: 'Preço de venda do veiculo',
    example: '55000'
  })
  precoVenda: number;
 
  @IsNotEmpty({message:'Campo quilometragem é obrigatório'})
  @IsNumber({},{message:'Campo precoVenda deve ser numérico'})
  @ApiProperty({
    description: 'Quilometragem do veiculo',
    example: '80000'
  })
  quilometragem: number;
 
  @IsNotEmpty({message:'Campo ano é obrigatório'})
  @IsNumber({},{message:'Campo precoVenda deve ser numérico'})
  @ApiProperty({
    description: 'Ano do veiculo',
    example: '2020'
  })
  ano: number;
}
