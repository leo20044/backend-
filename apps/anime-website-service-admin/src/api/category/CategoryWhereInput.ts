import { AnimeListRelationFilter } from "../anime/AnimeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  animeItems?: AnimeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
