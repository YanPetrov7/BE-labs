import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from 'src/graphql/models/Employee';
import { InjectModel } from '@nestjs/mongoose';
import { Computer } from 'src/graphql/models/Computer';
import mongoose, { Model, Types } from 'mongoose';
import { RemoveEmployeResultDto } from './dto/remove-employee.output';

@Injectable()
export class EmployeesService {
  // Injecting MongoDB models for employee and computer entities.
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Computer.name) private computerModel: Model<Computer>
  ) { }

  async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    // Verify that the referenced computer exists.
    const computerId: Types.ObjectId = createEmployeeInput.computer;
    
    // Check if the computer is already assigned.
    const employeeWithSameComputer = await this.employeeModel.exists({ computer: createEmployeeInput.computer }).exec();
    if (employeeWithSameComputer && computerId) {
      throw new ConflictException('Computer is already assigned to an employee');
    }

    if (!mongoose.Types.ObjectId.isValid(computerId) && computerId) {
      throw new NotFoundException(`Invalid computer ID format: "${computerId}"`);
    }

    const computer: Computer = await this.computerModel.findById(computerId);
    if (!computer && computerId) {
      throw new NotFoundException(`Computer with ID "${computerId}" not found`);
    }

    // Create and save the new employee record.
    const newEmployee = new this.employeeModel(createEmployeeInput);
    return (await newEmployee.save()).populate('computer');
  }

  // Retrieves all employees along with their associated computers.
  async findAll(): Promise<Employee[]> {
    return await this.employeeModel
      .find()
      .populate('computer')
      .exec();
  }

  async findOne(id: Types.ObjectId): Promise<Employee> {
    // Check if the employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Invalid ID format: "${id}"`);
    }

    const employee = await this.employeeModel
      .findById(id)
      .populate('computer')
      .exec();

    if (!employee) {
      throw new NotFoundException(`No employee found with ID: "${id}"`);
    }

    return employee;
  }

  async update(id: Types.ObjectId, updateEmployeeInput: UpdateEmployeeInput): Promise<Employee> {
    // Check if the employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Invalid ID format: "${id}"`);
    }

    const updatedEmployee = await this.employeeModel
      .findByIdAndUpdate(id, updateEmployeeInput, { new: true })
      .populate('computer')
      .exec();

    return updatedEmployee;
  }

  async remove(id: Types.ObjectId): Promise<RemoveEmployeResultDto> {
    // Check if the employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Invalid ID format: "${id}"`);
    }

    const result = await this.employeeModel
      .deleteOne({ _id: id })

    if (result.deletedCount === 0) {
      throw new NotFoundException(`Employee with ID "${id}" not found`);
    }

    // Returns data in format defined by RemoveEmployeResultDto.
    return result;
  }
}
