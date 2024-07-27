import { AnimeWhereUniqueInput } from "./AnimeWhereUniqueInput";
import { AnimeUpdateInput } from "./AnimeUpdateInput";

export type UpdateAnimeArgs = {
  where: AnimeWhereUniqueInput;
  data: AnimeUpdateInput;
};
