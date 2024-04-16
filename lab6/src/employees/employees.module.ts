import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/graphql/models/Employee';
import { Computer, ComputerSchema } from 'src/graphql/models/Computer';

// Defines the EmployeesModule with its dependencies.
@Module({
  imports: [
    // Registers MongoDB models within NestJS's dependency injection system.
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Computer.name, schema: ComputerSchema }
    ]),
  ],
  // Declares service and resolver providers for employee management.
  providers: [EmployeesResolver, EmployeesService],
})

export class EmployeesModule { }
