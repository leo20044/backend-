import { Category } from "../category/Category";

export type Anime = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  releaseDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
