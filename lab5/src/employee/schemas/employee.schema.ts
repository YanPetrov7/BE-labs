import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Computer } from '../../computer/schemas/computer.schema';

@Schema({ timestamps: true })
export class Employee extends Document {
  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  roomNumber: number;

  @Prop({ required: true })
  departmentName: string;

  @Prop({ type: Types.ObjectId, ref: Computer.name })
  computer: Types.ObjectId | null;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
