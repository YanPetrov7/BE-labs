import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Computer, ComputerSchema } from './schemas/computer.schema';

@Module({
  imports: [
    // Registers the Computer model within NestJS's dependency injection system using Mongoose.
    MongooseModule.forFeature([
      { name: Computer.name, schema: ComputerSchema },
    ]),
  ],
  controllers: [ComputerController], // Associates the ComputerController to handle incoming requests.
  providers: [ComputerService], // Provides the ComputerService to be injectable within the module.
})
export class ComputerModule { }
