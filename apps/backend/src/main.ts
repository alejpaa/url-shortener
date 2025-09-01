import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('/api/v1');

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap().catch((err) => {
  console.error('Error al iniciar la app:', err);
  process.exit(1);
});
