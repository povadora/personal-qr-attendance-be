import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './accounts/entities/account.entity';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'qr-attendance',
      password: 'qr-attendance123',
      database: 'attendance_db',
      entities: [Account, Student],
      synchronize: true,
    }),
    AccountsModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
