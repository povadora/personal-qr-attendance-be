import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { block, yearLevel } from '../enum/student-year-enum';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  age: string | null;

  @IsEnum(yearLevel)
  yearLevel: yearLevel;

  @IsEnum(block)
  block: block;
}
