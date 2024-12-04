import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AnimeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
