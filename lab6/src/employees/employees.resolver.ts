import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from 'src/graphql/models/Employee';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Types } from 'mongoose';
import { RemoveEmployeResultDto } from './dto/remove-employee.output';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) { }

  // GraphQL mutation for creating a new employee.
  @Mutation(() => Employee)
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
    return this.employeesService.create(createEmployeeInput);
  }

  // GraphQL query to retrieve all employees.
  @Query(() => [Employee], { name: 'employees' })
  findAllEmployees() {
    return this.employeesService.findAll();
  }

  // GraphQL query to retrieve a single employee by their ID.
  @Query(() => Employee, { name: 'employee' })
  findOneEmployee(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.employeesService.findOne(id);
  }

  // GraphQL mutation to update an existing employee's details.
  @Mutation(() => Employee)
  updateEmployee(@Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeesService.update(updateEmployeeInput._id, updateEmployeeInput);
  }

  // GraphQL mutation to remove an employee by their ID.
  @Mutation(() => RemoveEmployeResultDto)
  removeEmployee(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.employeesService.remove(id);
  }
}
