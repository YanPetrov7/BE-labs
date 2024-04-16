import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Catch()
export class CustomGqlExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): GraphQLFormattedError {
    // Change the exeption format to GraphQLError
    return new GraphQLError(exception.message);
  }
}
