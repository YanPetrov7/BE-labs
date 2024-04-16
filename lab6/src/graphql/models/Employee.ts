import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { Computer } from './Computer';

@ObjectType()
@Schema()
export class Employee extends Document {
  @Field(() => ID)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  lastName: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  roomNumber: number;

  @Field({ nullable: false })
  @Prop({ required: true })
  departmentName: string;

  @Field(() => Computer, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'Computer' })
  computer: Types.ObjectId | Computer | null;

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;

  @Field()
  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
