import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Computer } from '../computer/schemas/computer.schema';
import mongoose, { Model } from 'mongoose';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto';

// Injectable service class for managing employee records linked to computer resources.
@Injectable()
export class EmployeeService {
  // Injecting MongoDB models for employee and computer entities.
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Computer.name) private computerModel: Model<Computer>
  ) { }

  // Creates a new employee after checking the uniqueness of the computer assignment.
  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    // Check if the computer is already assigned.
    const employeeWithSameComputer = await this.employeeModel.exists({ computer: createEmployeeDto.computer }).exec();
    if (employeeWithSameComputer) {
      throw new ConflictException('Computer is already assigned to an employee');
    }

    // Verify that the referenced computer exists.
    const computerId: string = createEmployeeDto.computer;

    const computer = await this.computerModel.findById(computerId).exec();
    if (!computer && computerId) {
      throw new NotFoundException(`Computer with ID ${computerId} not found`);
    }

    // Create and save the new employee record.
    const newEmployee = new this.employeeModel(createEmployeeDto);
    return await newEmployee.save();
  }

  // Retrieves all employees along with their associated computers.
  async findAllEmployees(): Promise<Employee[]> {
    return await this.employeeModel
      .find()
      .populate('computer')
      .exec();
  }

  // Retrieves a single employee by their ID, including computer details.
  async findOneEmployee(employeeId: string): Promise<Employee> {
    // Check if the employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      throw new NotFoundException(`Invalid ID format: ${employeeId}`);
    }

    const employee = await this.employeeModel
      .findById(employeeId)
      .populate('computer')
      .exec();

    return employee;
  }

  // Updates an employee's details based on the provided ID and update data.
  async updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    // Check if the employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      throw new NotFoundException(`Invalid ID format: ${employeeId}`);
    }

    const updatedEmployee = await this.employeeModel
      .findByIdAndUpdate(employeeId, updateEmployeeDto, { new: true })
      .exec();

    return updatedEmployee;
  }

  // Removes an employee record by ID.
  async removeEmployee(employeeId: string): Promise<{ deletedCount?: number }> {
    // Check if the employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      throw new NotFoundException(`Invalid ID format: ${employeeId}`);
    }

    const result = await this.employeeModel.deleteOne({ _id: employeeId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }
    return { deletedCount: result.deletedCount };
  }
}
