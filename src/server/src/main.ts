/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "./../../../scripts"
import { ConfigService } from '@nestjs/config';
import { EnvCollection } from './shared/@constants/env.collection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const service = new ConfigService();
  const serverPort = parseInt(service.get<number>(EnvCollection.SERVER_PORT));

  await app.listen(serverPort);
}
bootstrap();
