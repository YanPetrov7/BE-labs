import { Injectable } from '@nestjs/common';

// Use the @Injectable() decorator to define this class as a provider that can be injected into other classes.
@Injectable()
export class AppService {
  // Define a method that returns a string.
  getHello(): string {
    // Return a string that could be a response message or server greeting.
    return 'NEST JS CRUD API';
  }
}
