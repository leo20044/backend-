import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type AnimeUpdateInput = {
  releaseDate?: Date | null;
  title?: string | null;
  description?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
