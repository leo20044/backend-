import { AnimeCreateNestedManyWithoutCategoriesInput } from "./AnimeCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  animeItems?: AnimeCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
