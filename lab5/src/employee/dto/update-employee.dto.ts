import { IsAlpha, IsMongoId, IsAlphanumeric, IsOptional } from "class-validator";

export class UpdateEmployeeDto {
  @IsOptional()
  @IsAlpha()
  lastName?: string;

  @IsOptional()
  @IsAlphanumeric()
  roomNumber?: number;

  @IsOptional()
  @IsAlpha()
  departmentName?: string;

  @IsOptional()
  @IsMongoId()
  computer?: string;
}
