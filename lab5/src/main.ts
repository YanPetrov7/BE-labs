// Import necessary modules from NestJS core and the application's main module.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http.validation.filter';

// Define an asynchronous function to bootstrap the application.
async function bootstrap() {
  // Create an instance of the application using the AppModule.
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // Strip away non-whitelisted properties
      forbidNonWhitelisted: true, // Throw errors if non-whitelisted values are provided
      transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
      exceptionFactory: (errors) => { // Custom exception responses
        const messages = errors.map(error => ({
          property: error.property,
          error: Object.values(error.constraints).join(', '),
        }));
        return new HttpException({ errors: messages }, HttpStatus.BAD_REQUEST);
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  // Start the application and listen for incoming requests on port 3000.
  await app.listen(3001);
}

// Execute the bootstrap function to start the application.
bootstrap();
