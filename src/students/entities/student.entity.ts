import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Generated,
  CreateDateColumn,
} from 'typeorm';
import { yearLevel } from '../enum/student-year-enum';

@Entity()
export class Student {
  @PrimaryGeneratedColumn({
    name: 'student_id',
  })
  studentId: number;

  @Column({
    name: 'student_uuid',
    type: 'uuid',
    unique: true,
  })
  @Generated('uuid')
  studentUuid: string;

  @Column({
    name: 'first_name',
    type: 'varchar',
  })
  firstName: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
  })
  lastName: string;

  @Column({
    name: 'age',
    type: 'varchar',
    nullable: true,
  })
  age: string | null;

  @Column({
    name: 'id_number',
    type: 'varchar',
    nullable: true,
  })
  idNumber: string | null;

  @Column({
    name: 'year_level',
    type: 'enum',
    enum: yearLevel,
    nullable: true,
  })
  yearLevel: yearLevel | null;

  @CreateDateColumn()
  createdAt: Date;
}
