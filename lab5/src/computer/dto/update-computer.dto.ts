import { IsOptional, IsAlpha, IsAlphanumeric, IsString } from 'class-validator';

export class UpdateComputerDto {
  @IsOptional()
  @IsAlphanumeric()
  name?: string;

  @IsOptional()
  @IsAlpha()
  brand?: string;

  @IsOptional()
  @IsString()
  serialNumber?: string;
}
