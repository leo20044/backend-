import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type AnimeWhereInput = {
  id?: StringFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
};
