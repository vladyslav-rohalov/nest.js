import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Tech task for Rangein')
    .setDescription('swagger for tech task')
    .setVersion('1.0.0')
    .addTag('Vladyslav Rohalov')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`server started on port = ${PORT}`));
}
start();
