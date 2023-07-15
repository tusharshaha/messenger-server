import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatGateWay } from './chat.gateway';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  providers: [ChatGateWay],
})
export class AppModule {}
