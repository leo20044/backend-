import { Module } from "@nestjs/common";
import { AnimeModuleBase } from "./base/anime.module.base";
import { AnimeService } from "./anime.service";
import { AnimeController } from "./anime.controller";
import { AnimeResolver } from "./anime.resolver";

@Module({
  imports: [AnimeModuleBase],
  controllers: [AnimeController],
  providers: [AnimeService, AnimeResolver],
  exports: [AnimeService],
})
export class AnimeModule {}
