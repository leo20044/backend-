import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnimeServiceBase } from "./base/anime.service.base";

@Injectable()
export class AnimeService extends AnimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
