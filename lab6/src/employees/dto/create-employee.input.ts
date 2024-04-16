import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

@InputType()
export class CreateEmployeeInput {
  @IsNotEmpty()
  @IsAlpha()
  @Field(() => String, { nullable: false })
  lastName: string;

  @IsNotEmpty()
  @Field(() => Int, { nullable: false })
  roomNumber: number;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Field(() => String, { nullable: false })
  departmentName: string;

  @IsOptional()
  @Field(() => String || null, { nullable: true })
  computer?: Types.ObjectId | null;
}
