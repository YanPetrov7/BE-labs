import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RemoveComputerResultDto {
  @Field(() => Int)
  deletedCount: number;

  @Field(() => Boolean)
  acknowledged: boolean;
}
