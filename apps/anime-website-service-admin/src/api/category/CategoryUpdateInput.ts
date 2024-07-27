import { AnimeUpdateManyWithoutCategoriesInput } from "./AnimeUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  animeItems?: AnimeUpdateManyWithoutCategoriesInput;
};
