import { IsString, IsAlpha, IsOptional, IsAlphanumeric, IsNotEmpty } from "class-validator";

export class CreateComputerDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  name: string;

  @IsOptional()
  @IsAlpha()
  brand?: string;

  @IsOptional()
  @IsString()
  serialNumber?: string;
}
