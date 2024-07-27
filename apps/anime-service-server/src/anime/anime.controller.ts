import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnimeService } from "./anime.service";
import { AnimeControllerBase } from "./base/anime.controller.base";

@swagger.ApiTags("anime")
@common.Controller("anime")
export class AnimeController extends AnimeControllerBase {
  constructor(protected readonly service: AnimeService) {
    super(service);
  }
}
