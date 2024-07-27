import { AnimeCreateNestedManyWithoutCategoriesInput } from "./AnimeCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  animeItems?: AnimeCreateNestedManyWithoutCategoriesInput;
};
