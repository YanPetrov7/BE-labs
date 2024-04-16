import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Computer, ComputerSchema } from '../computer/schemas/computer.schema';

@Module({
  imports: [
    // MongoDB models registration.
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Computer.name, schema: ComputerSchema }
    ]),
  ],
  controllers: [EmployeeController], // Controller bindings for the module.
  providers: [EmployeeService], // Services provided by the module.
})
export class EmployeeModule { }
