import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // makes the config globally available in your app
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
