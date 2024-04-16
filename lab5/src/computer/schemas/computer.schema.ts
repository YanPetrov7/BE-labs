import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Computer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  brand: string;

  @Prop()
  serialNumber: string;
}

export const ComputerSchema = SchemaFactory.createForClass(Computer);
