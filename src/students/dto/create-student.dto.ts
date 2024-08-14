import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsOptional()
  @IsString()
  studentPhoto: string | null;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  age: string | null;

  @IsOptional()
  @IsString()
  year: string | null;
}
