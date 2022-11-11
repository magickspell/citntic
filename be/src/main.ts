import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// entry point of application

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
