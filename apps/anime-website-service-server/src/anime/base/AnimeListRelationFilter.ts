/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnimeWhereInput } from "./AnimeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnimeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnimeWhereInput,
  })
  @ValidateNested()
  @Type(() => AnimeWhereInput)
  @IsOptional()
  @Field(() => AnimeWhereInput, {
    nullable: true,
  })
  every?: AnimeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnimeWhereInput,
  })
  @ValidateNested()
  @Type(() => AnimeWhereInput)
  @IsOptional()
  @Field(() => AnimeWhereInput, {
    nullable: true,
  })
  some?: AnimeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnimeWhereInput,
  })
  @ValidateNested()
  @Type(() => AnimeWhereInput)
  @IsOptional()
  @Field(() => AnimeWhereInput, {
    nullable: true,
  })
  none?: AnimeWhereInput;
}
export { AnimeListRelationFilter as AnimeListRelationFilter };
