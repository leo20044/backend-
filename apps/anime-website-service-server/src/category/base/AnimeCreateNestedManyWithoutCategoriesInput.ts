/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AnimeWhereUniqueInput } from "../../anime/base/AnimeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AnimeCreateNestedManyWithoutCategoriesInput {
  @Field(() => [AnimeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnimeWhereUniqueInput],
  })
  connect?: Array<AnimeWhereUniqueInput>;
}

export { AnimeCreateNestedManyWithoutCategoriesInput as AnimeCreateNestedManyWithoutCategoriesInput };
