import { Anime as TAnime } from "../api/anime/Anime";

export const ANIME_TITLE_FIELD = "title";

export const AnimeTitle = (record: TAnime): string => {
  return record.title?.toString() || String(record.id);
};
