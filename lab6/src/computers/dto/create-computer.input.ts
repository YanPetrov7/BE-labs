import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateComputerInput {
  @IsNotEmpty()
  @IsAlpha()
  @Field(() => String, { nullable: false })
  name: string;

  @IsOptional()
  @IsAlpha()
  @Field(() => String, { nullable: true })
  brand?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  serialNumber?: string;
}
