import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
  .setTitle('CARUPI API')
  .setDescription('Documentação Teste Específico')
  .setVersion('1.0')
  .build()

  const doc = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, doc)

  await app.listen(3000);
  console.log('Running')
}
bootstrap();
