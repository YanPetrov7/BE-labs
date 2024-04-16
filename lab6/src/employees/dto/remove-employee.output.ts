import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RemoveEmployeResultDto {
  @Field(() => Int)
  deletedCount: number;

  @Field(() => Boolean)
  acknowledged: boolean;
}
