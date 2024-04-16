import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Computer } from './schemas/computer.schema';
import { CreateComputerDto, UpdateComputerDto } from './dto/';

@Injectable()
export class ComputerService {
  constructor(@InjectModel(Computer.name) private computerModel: Model<Computer>) { }

  async createComputer(createComputerDto: CreateComputerDto): Promise<Computer> {
    // Creates a new computer entry in the database from the provided DTO and returns it.
    const newComputer = new this.computerModel(createComputerDto);
    return await newComputer.save();
  }

  async findAllComputers(): Promise<Computer[]> {
    // Retrieves all computers from the database.
    return await this.computerModel.find().exec();
  }

  async findOneComputer(computerId: string): Promise<Computer> {
    // Check if the computerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(computerId)) {
      throw new NotFoundException(`Invalid ID format: ${computerId}`);
    }

    // Finds a single computer by its ID. Throws an error if not found.
    const computer = await this.computerModel.findById(computerId).exec();
    if (!computer) {
      throw new NotFoundException(`Computer with ID ${computerId} not found`);
    }
    return computer;
  }

  async updateComputer(computerId: string, updateComputerDto: UpdateComputerDto): Promise<Computer> {
    // Check if the computerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(computerId)) {
      throw new NotFoundException(`Invalid ID format: ${computerId}`);
    }

    // Updates an existing computer by its ID with new data and returns the updated document.
    const updatedComputer = await this.computerModel.findByIdAndUpdate(computerId, updateComputerDto, { new: true }).exec();
    return updatedComputer;
  }

  async removeComputer(computerId: string): Promise<{ deletedCount?: number }> {
    // Check if the computerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(computerId)) {
      throw new NotFoundException(`Invalid ID format: ${computerId}`);
    }

    // Deletes a computer by its ID and returns the result of the operation.
    const result = await this.computerModel.deleteOne({ _id: computerId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Computer with ID ${computerId} not found`);
    }
    return { deletedCount: result.deletedCount };
  }
}
