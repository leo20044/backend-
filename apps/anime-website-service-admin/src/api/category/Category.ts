import { Anime } from "../anime/Anime";

export type Category = {
  animeItems?: Array<Anime>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
