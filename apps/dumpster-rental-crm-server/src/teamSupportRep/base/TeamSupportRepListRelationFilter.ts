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
import { TeamSupportRepWhereInput } from "./TeamSupportRepWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TeamSupportRepListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TeamSupportRepWhereInput,
  })
  @ValidateNested()
  @Type(() => TeamSupportRepWhereInput)
  @IsOptional()
  @Field(() => TeamSupportRepWhereInput, {
    nullable: true,
  })
  every?: TeamSupportRepWhereInput;

  @ApiProperty({
    required: false,
    type: () => TeamSupportRepWhereInput,
  })
  @ValidateNested()
  @Type(() => TeamSupportRepWhereInput)
  @IsOptional()
  @Field(() => TeamSupportRepWhereInput, {
    nullable: true,
  })
  some?: TeamSupportRepWhereInput;

  @ApiProperty({
    required: false,
    type: () => TeamSupportRepWhereInput,
  })
  @ValidateNested()
  @Type(() => TeamSupportRepWhereInput)
  @IsOptional()
  @Field(() => TeamSupportRepWhereInput, {
    nullable: true,
  })
  none?: TeamSupportRepWhereInput;
}
export { TeamSupportRepListRelationFilter as TeamSupportRepListRelationFilter };
