import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { CreateComputerDto, UpdateComputerDto } from './dto';
import { Computer } from './schemas/computer.schema';

// Specifies the base route for this controller.
@Controller('Computer')
export class ComputerController {
  constructor(private readonly computerService: ComputerService) { }

  // Handles POST requests to create a new computer.
  @Post()
  create(@Body() createComputerDto: CreateComputerDto): Promise<Computer> {
    return this.computerService.createComputer(createComputerDto);
  }

  // Handles GET requests to retrieve all computers.
  @Get()
  findAll() {
    return this.computerService.findAllComputers();
  }

  // Handles GET requests for a specific computer by its ID.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.computerService.findOneComputer(id);
  }

  // Handles PUT requests to update a specific computer by its ID.
  @Put(':id')
  update(@Param('id') id: string, @Body() updateComputerDto: UpdateComputerDto) {
    return this.computerService.updateComputer(id, updateComputerDto);
  }

  // Handles DELETE requests to remove a specific computer by its ID.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.computerService.removeComputer(id);
  }
}
