import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VeiculosModule } from './modules/veiculos/veiculos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://balta:e296cd9f@localhost:27017/carupi'),
    VeiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
