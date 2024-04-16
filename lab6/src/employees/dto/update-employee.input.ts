import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateEmployeeInput } from './create-employee.input';
import { Types } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) { 
  @IsNotEmpty()
  @Field(() => String, { description: 'The unique identifier of the employee' })
  _id: Types.ObjectId;
}
