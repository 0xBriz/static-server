import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { join } from 'path';

async function bootstrap() {
  config({ path: join(process.cwd(), '.env') });
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.HTTP_PORT || 80;
  await app.listen(PORT, () =>
    console.log(`Static Server listening on: ${PORT}`),
  );
}

bootstrap();
