import { Injectable } from "@nestjs/common";
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService {
  private readonly _client: PrismaClient;

  public constructor() {
    this._client = new PrismaClient();
  }

  public get client(): PrismaClient {
    return this._client;
  }
}