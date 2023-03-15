import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AddressDomain } from '@meisi-thesis/database/src/domain/address/address.domain'

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.development.env', '.production.env']
  })]
})
export class AppModule {
  public constructor () {
    const domain = new AddressDomain(
      '', '', '', '', '', '', '', '', new Date(), new Date()
    );

    console.log(domain)
  }
}
