import { Anime } from "../anime/Anime";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  animeItems?: Array<Anime>;
};
