import { AnimeWhereInput } from "./AnimeWhereInput";
import { AnimeOrderByInput } from "./AnimeOrderByInput";

export type AnimeFindManyArgs = {
  where?: AnimeWhereInput;
  orderBy?: Array<AnimeOrderByInput>;
  skip?: number;
  take?: number;
};
