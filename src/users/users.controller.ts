import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from './users.service';  // Import type only for TypeScript metadata

// Controller handles routes starting with '/users'
@Controller('users')
export class UsersController {
  // Inject UsersService to access user data and logic
  constructor(private readonly usersService: UsersService) {}

  // GET /users — returns list of all users
  @Get()
  getAllUsers(): User[] {
    return this.usersService.findAll();
  }

  // GET /users/:id — returns a single user by id
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.usersService.findOne(+id); // '+' converts string to number
    if (!user) {
      // Throw 404 error if user not found
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }
}