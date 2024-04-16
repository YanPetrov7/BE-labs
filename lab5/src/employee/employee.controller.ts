import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto';

// Defines the route prefix for all routes within this controller.
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  // Handles POST requests to create an employee.
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<any> {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  // Handles GET requests to retrieve all employees.
  @Get()
  findAll() {
    return this.employeeService.findAllEmployees();
  }

  // Handles GET requests to retrieve a specific employee by ID.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOneEmployee(id);
  }

  // Handles PUT requests to update an employee by ID.
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(id, updateEmployeeDto);
  }

  // Handles DELETE requests to remove an employee by ID.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.removeEmployee(id);
  }
}
