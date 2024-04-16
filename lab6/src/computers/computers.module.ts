import { Module } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { ComputersResolver } from './computers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Computer, ComputerSchema } from 'src/graphql/models/Computer';

@Module({
  imports: [
    // The MongooseModule.forFeature method registers the Computer model schema within the NestJS module. 
    MongooseModule.forFeature([
      { name: Computer.name, schema: ComputerSchema },
    ]),
  ],
  providers: [
    ComputersResolver, // Registers the ComputersResolver as a provider to enable the handling of GraphQL queries and mutations for computers.
    ComputersService, // Registers the ComputersService as a provider, allowing it to be injected wherever needed in this module.
  ],
})
export class ComputersModule { }
