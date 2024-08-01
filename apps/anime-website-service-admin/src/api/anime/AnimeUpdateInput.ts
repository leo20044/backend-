import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type AnimeUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  releaseDate?: Date | null;
  title?: string | null;
};
