import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// This controller handles the root route '/' of the application
@Controller()
export class AppController {
  // Inject AppService to use its business logic
  constructor(private readonly appService: AppService) {}

  // Handle GET requests to '/' and return a greeting string
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}