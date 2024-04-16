import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// The @Controller decorator marks the class as a route handler, specifying an optional route path.
@Controller()
export class AppController {
  // Dependency injection of the AppService.
  constructor(private readonly appService: AppService) { }

  // Route handler that responds to GET requests at the root path ("/").
  @Get()
  getHello(): string {
    // Calls getHello() method of AppService and returns the result.
    return this.appService.getHello();
  }
}
