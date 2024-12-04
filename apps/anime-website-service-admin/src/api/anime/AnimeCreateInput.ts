import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type AnimeCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  releaseDate?: Date | null;
  title?: string | null;
};
