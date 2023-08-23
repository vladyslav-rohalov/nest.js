import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
// import { ValidationPipe } from './pipes/validation.pipe';
// import { useContainer } from 'class-validator';

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Tech task for Rangein')
    .setDescription('Bla-bla-bla')
    .setVersion('1.0.0')
    .addTag('Vladyslav Rohalov')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());
  // useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(PORT, () => console.log(`server started on port = ${PORT}`));
}
start();
