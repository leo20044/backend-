import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type AnimeCreateInput = {
  releaseDate?: Date | null;
  title?: string | null;
  description?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
