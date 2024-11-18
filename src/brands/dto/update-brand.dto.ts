import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto {
  @MinLength(1)
  @IsString()
  name: string;
}
