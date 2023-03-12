import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env', '.production.env']
  })]
})
export class AppModule {}
