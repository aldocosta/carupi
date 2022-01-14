import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiRequestTimeoutResponse, ApiResponse } from '@nestjs/swagger';
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
    @ApiBody({ type: VeiculosDTO })
    @ApiRequestTimeoutResponse({ description: "Erro de timeout" })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'BAD REQUEST.' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: VeiculosDTO
    })
    @ApiOkResponse({ status: 201 })
    @ApiOperation({ summary: 'Realiza insert de um veículo' })
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
    @ApiBody({ type: VeiculosDTO })
    @ApiRequestTimeoutResponse({ description: "Erro de timeout" })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'BAD REQUEST.' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: VeiculosDTO
    })
    @ApiOkResponse({ status: 201 })
    @ApiOperation({ summary: 'Realiza a atualização de um veículo' })
    @ApiParam({
        name:"id",
        example:"61df7ac5468059fbaafc8adc"
    })
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
    @ApiRequestTimeoutResponse({ description: "Erro de timeout" })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'BAD REQUEST.' })
    @ApiResponse({
        status: HttpStatus.OK
    })
    @ApiOkResponse({ status: 201 })
    @ApiParam({
        name:"id",
        example:"61df7ac5468059fbaafc8adc"
    })
    @ApiOperation({ summary: 'Realiza delete de um veículo' })
    async delete(@Param('id') id: string) {
        try {
            return await this.veiculoSvc.delete(id)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get()
    @ApiRequestTimeoutResponse({ description: "Erro de timeout" })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'BAD REQUEST.' })
    @ApiResponse({
        status: HttpStatus.OK
    })
    @ApiOkResponse({ status: 201 })
    @ApiOperation({
        summary: 'Realiza consulta de um veículo',
        description: 
        'Exemplos: http://localhost:3000/veiculos/v1?versao=lt, http://localhost:3000/veiculos/v1?anomax=2017&anomin=2016, http://localhost:3000/veiculos/v1?precomax=3500&precomin=3000'
    })
    async find(
        @Query() params: string
    ) {
        return await this.veiculoSvc.find(params)
    }
}
