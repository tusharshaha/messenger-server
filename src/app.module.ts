import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatGateWay } from './chat.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [ChatGateWay],
})
export class AppModule {}
