import { Category } from "../category/Category";

export type Anime = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  releaseDate: Date | null;
  title: string | null;
  description: string | null;
  category?: Category | null;
};
