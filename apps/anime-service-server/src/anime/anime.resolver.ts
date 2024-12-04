import * as graphql from "@nestjs/graphql";
import { AnimeResolverBase } from "./base/anime.resolver.base";
import { Anime } from "./base/Anime";
import { AnimeService } from "./anime.service";

@graphql.Resolver(() => Anime)
export class AnimeResolver extends AnimeResolverBase {
  constructor(protected readonly service: AnimeService) {
    super(service);
  }
}
