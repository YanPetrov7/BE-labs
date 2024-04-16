import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ComputerModule } from './computer/computer.module';
import { ConfigModule, ConfigService } from '@nestjs/config'

// Decorator that marks a class as a module, which organizes providers, controllers, etc.
@Module({
  // Modules to import and use within this module.
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    EmployeeModule, // Employee features module
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
        dbName: config.get<string>('MONGO_DB_NAME'),
      }),
    }),
    ComputerModule // Computer features module
  ],
  controllers: [AppController], // Controllers to handle incoming requests.
  providers: [AppService], // Providers that supply services and other functionality.
})
export class AppModule { }
