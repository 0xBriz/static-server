import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.HTTP_PORT || 3535;
  await app.listen(PORT, () => console.log(`Static Server listening on: ${PORT}`));
}

bootstrap();
