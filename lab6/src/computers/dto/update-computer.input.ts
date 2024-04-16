import { Types } from 'mongoose';
import { CreateComputerInput } from './create-computer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateComputerInput extends PartialType(CreateComputerInput) {
  @IsNotEmpty()
  @Field(() => String)
  id: Types.ObjectId;
}
