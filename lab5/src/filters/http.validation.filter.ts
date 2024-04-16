import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

// Define a filter to handle all HttpException types within the application.
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // Method to process the caught HttpException, structuring the response format.
  catch(exception: HttpException, host: ArgumentsHost) {
    // Access the HTTP context from the host to manipulate the response.
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    // Respond with a custom JSON structure that includes the status code, error details, and a timestamp.
    response
      .status(status)
      .json({
        statusCode: status,
        ...(typeof exceptionResponse === 'object' ? exceptionResponse : { message: exceptionResponse }),
        timestamp: new Date().toISOString(),
      });
  }
}
