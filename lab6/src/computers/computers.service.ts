import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComputerInput } from './dto/create-computer.input';
import { UpdateComputerInput } from './dto/update-computer.input';
import { InjectModel } from '@nestjs/mongoose';
import { Computer } from 'src/graphql/models/Computer';
import mongoose, { Model, Types } from 'mongoose';
import { RemoveComputerResultDto } from './dto/remove-computer.output';

@Injectable()
export class ComputersService {
  // Injecting the MongoDB model for the Computer entity.
  constructor(@InjectModel(Computer.name) private computerModel: Model<Computer>) { }

  async create(createComputerInput: CreateComputerInput) {
    // Creates a new computer entry in the database from the provided DTO and returns it.
    const newComputer = new this.computerModel(createComputerInput);
    return await newComputer.save();
  }

  async findAll(): Promise<Computer[]> {
    // Retrieves all computers from the database.
    return await this.computerModel.find().exec();
  }

  async findOne(id: Types.ObjectId): Promise<Computer> {
    // Check if the computerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Invalid ID format: ${id}`);
    }

    // Finds a single computer by its ID. Throws an error if not found.
    const computer = await this.computerModel.findById(id).exec();
    if (!computer) {
      throw new NotFoundException(`Computer with ID ${id} not found`);
    }

    return computer;
  }

  async update(id: Types.ObjectId, updateComputerInput: UpdateComputerInput): Promise<Computer> {
    // Check if the computerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Invalid ID format: ${id}`);
    }

    // Updates an existing computer by its ID with new data and returns the updated document.
    const updatedComputer = await this.computerModel.findByIdAndUpdate(id, updateComputerInput, { new: true }).exec();
    return updatedComputer;
  }

  async remove(id: Types.ObjectId): Promise<RemoveComputerResultDto> {
    // Check if the computerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Invalid ID format: ${id}`);
    }

    // Deletes a computer by its ID and returns the result of the operation.
    const result = await this.computerModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException(`Computer with ID ${id} not found`);
    }

    // Returns data in format defined by RemoveComputerResultDto.
    return result;
  }
}
