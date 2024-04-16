import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

async function bootstrap() {
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
        
        const errorMessage = messages.map(message => message.error).join(', ');
        return new BadRequestException(errorMessage);
      },
    }),
  );
  await app.listen(3000);
}

bootstrap();
