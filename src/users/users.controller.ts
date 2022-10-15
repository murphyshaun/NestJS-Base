import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async GetAllUsers(): Promise<Array<User>> {
    return this.userService.GetAllUser();
  }
}
