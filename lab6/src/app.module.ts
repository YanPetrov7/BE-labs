import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { ComputersModule } from './computers/computers.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    // Configures the ConfigModule to load environment variables from the .env file.
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    // Configures the MongooseModule to connect to the MongoDB database.
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
        dbName: config.get<string>('MONGO_DB_NAME'),
      }),
    }),

    // Configures the GraphQLModule to use the ApolloDriver and automatically generate the schema
    // Also configures the formatError function to return a custom error format.
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      formatError: (error: GraphQLError) => {
        const errorResponse: GraphQLFormattedError = {
          message: error.message,
          locations: error.locations,
          path: error.path
        };
        return errorResponse;
      }
    }),
    EmployeesModule,
    ComputersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
