import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatGateWay } from './chat.gateway';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UserModule,
  ],
  providers: [ChatGateWay],
})
export class AppModule {}
