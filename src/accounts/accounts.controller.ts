import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  // UseGuards,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AuthLoginDto } from './dto/auth-login.dto';

// import { JwtAuthGuard } from 'src/barangay-guards/jwt-auth-guards';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('create-account')
  @UsePipes(new ValidationPipe({ transform: true }))
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.createAccount(createAccountDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('registered-account')
  findAllRegisteredAccount() {
    return this.accountsService.findAllRegisteredAccount();
  }
  // @UseGuards(JwtAuthGuard)
  @Get(':uuid')
  findOneRegisteredAccount(@Param('uuid') uuid: string) {
    return this.accountsService.findOneRegisteredAccount(uuid);
  }
  // @UseGuards(JwtAuthGuard)
  @Patch('update-account/:uuid')
  updateAccount(
    @Param('uuid') uuid: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountsService.updateAccount(uuid, updateAccountDto);
  }
  // @UseGuards(JwtAuthGuard)
  @Delete('delete-account/:uuid')
  removeAccount(@Param('uuid') uuid: string) {
    return this.accountsService.removeAccount(uuid);
  }

  // pra sa authentication ni dri
  @Post('auth-login')
  authLogin(@Body() authLoginDto: AuthLoginDto) {
    return this.accountsService.authLogin(authLoginDto);
  }
}
