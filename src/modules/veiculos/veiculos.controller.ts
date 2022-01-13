import { Body, Controller, Delete, HttpException, HttpStatus, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { VeiculosDTO } from './dto/veiculos.dto';
import { VeiculosDocument } from './veiculos.model';
import { VeiculosService } from './veiculos.service';

@Controller('veiculos/v1')
export class VeiculosController {
    /**
     *
     */
    constructor(private readonly veiculoSvc: VeiculosService) { }

    @Post()
    async create(
        @Body(new ValidationPipe({ transform: true })) veiculoDto: VeiculosDTO
    ) {
        try {
            return await this.veiculoSvc.create(veiculoDto)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Put(":id")
    async update(
        @Param('id') id: string,
        @Body(new ValidationPipe({ transform: true })) veiculoDto: VeiculosDTO
    ) {
        try {
            return await this.veiculoSvc.update(id, veiculoDto)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Delete(":id")
    async delete(@Param('id') id: string) {
        try {
            return await this.veiculoSvc.delete(id)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    // async find() {
    //     return await this.cervejaModel.find()
    // }
}
