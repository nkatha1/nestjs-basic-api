import { Injectable } from '@nestjs/common';

// User interface defines the structure of a user object
export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  // In-memory array to store users (pretending this is our database)
  private users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  // Returns the full list of users
  findAll(): User[] {
    return this.users;
  }

  // Finds and returns a user by ID, or undefined if not found
  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}