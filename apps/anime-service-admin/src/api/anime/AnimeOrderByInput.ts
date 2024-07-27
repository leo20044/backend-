import { SortOrder } from "../../util/SortOrder";

export type AnimeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
};
