import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApikeyModule } from './apikeys/apikey.module';
import { PaymentModule } from './payments/payment.module';
import { UserModule } from './users/user.module';
import { KycModule } from './kyc/kyc.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserprofilesModule } from './profiles/profiles.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    ApikeyModule,
    PaymentModule,
    UserModule,
    KycModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT) || 15433,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [],
    }),
    UserprofilesModule,
    OrganizationsModule,
    WebhookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
