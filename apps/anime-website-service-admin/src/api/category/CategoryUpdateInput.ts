import { AnimeUpdateManyWithoutCategoriesInput } from "./AnimeUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  animeItems?: AnimeUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
