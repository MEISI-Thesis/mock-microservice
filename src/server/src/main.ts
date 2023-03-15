import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvCollection } from './shared/@constants/env.collection';

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const serverPort = Number(configService.get(EnvCollection.SERVER_PORT));

  await app.listen(serverPort);
}
void bootstrap();
