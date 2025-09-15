import { Injectable } from '@nestjs/common';

// Service class that contains business logic for the AppController
@Injectable()
export class AppService {
  // Returns a simple greeting message
  getHello(): string {
    return 'Hello World!';
  }
}