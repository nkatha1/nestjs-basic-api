import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

// Main application module wiring all controllers and providers together
@Module({
  imports: [],  // Import other modules here if needed
  controllers: [AppController, UsersController],  // Register controllers
  providers: [AppService, UsersService],  // Register services/providers
})
export class AppModule {}