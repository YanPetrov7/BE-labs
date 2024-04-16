import { IsAlpha, IsAlphanumeric, IsMongoId, IsNotEmpty, IsOptional } from "class-validator";

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsAlpha()
  lastName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  roomNumber: number;

  @IsNotEmpty()
  @IsAlphanumeric()
  departmentName: string;

  @IsOptional()
  @IsMongoId()
  computer?: string;
}
