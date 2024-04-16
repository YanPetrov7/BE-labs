import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';

@ObjectType()
@Schema()
export class Computer extends Document {
  @Field(() => ID)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  name: string;

  @Field({ nullable: true })
  @Prop({ required: false, type: String })
  brand: string;

  @Field({ nullable: true })
  @Prop({ required: false, type: String })
  serialNumber: string;

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;

  @Field()
  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ComputerSchema = SchemaFactory.createForClass(Computer);
