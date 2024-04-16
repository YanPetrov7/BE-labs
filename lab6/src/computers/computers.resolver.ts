import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComputersService } from './computers.service';
import { Computer } from 'src/graphql/models/Computer';
import { CreateComputerInput } from './dto/create-computer.input';
import { UpdateComputerInput } from './dto/update-computer.input';
import { Types } from 'mongoose';
import { RemoveComputerResultDto } from './dto/remove-computer.output';

@Resolver(() => Computer)
// Defines a GraphQL resolver for the Computer entity, indicating that this class handles GraphQL queries and mutations related to computers.
export class ComputersResolver {
  constructor(private readonly computersService: ComputersService) { }

  // GraphQL mutation that allows creating a new computer, modifying server-side data.
  @Mutation(() => Computer)
  createComputer(@Args('createComputerInput') createComputerInput: CreateComputerInput) {
    return this.computersService.create(createComputerInput);
  }

  // GraphQL query that retrieves all computers. The 'name' option customizes how this query appears in the GraphQL schema.
  @Query(() => [Computer], { name: 'computers' })
  findAllComputers() {
    return this.computersService.findAll();
  }

  // GraphQL query to retrieve a single computer by its ID, allowing for precise data retrieval.
  @Query(() => Computer, { name: 'computer' })
  findOneComputer(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.computersService.findOne(id);
  }

  // Mutation to update an existing computer's details, impacting server-side data.
  @Mutation(() => Computer)
  updateComputer(@Args('updateComputerInput') updateComputerInput: UpdateComputerInput) {
    return this.computersService.update(updateComputerInput.id, updateComputerInput);
  }

  // Mutation that removes a computer and returns a DTO with results of the operation, affecting server-side data.
  @Mutation(() => RemoveComputerResultDto)
  removeComputer(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.computersService.remove(id);
  }
}
