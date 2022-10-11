import { UsersService } from './users.service';
import { Controller } from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  async GetAllUsers(): Promise<Array<User>> {
    return this.userService.GetAllUser();
  }
}
