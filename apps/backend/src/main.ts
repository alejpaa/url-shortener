// import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4321', 'http://127.0.0.1:4321'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  app.setGlobalPrefix('/api/v1');

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap().catch((err) => {
  console.error('Error al iniciar la app:', err);
  process.exit(1);
});
