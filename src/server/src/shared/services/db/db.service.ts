import { Injectable } from "@nestjs/common";
import { AbstractDatabase } from "src/shared/@abstracts/database.abstract";

@Injectable()
export class DatabaseService extends AbstractDatabase {
  public constructor() {
    super();
  }

  public async connect(): Promise<void> {
    await this._client?.connect().catch((error) => error)
  }

  public async disconnect(): Promise<void> {
    await this._client?.end().catch((error) => error)
  }

  public async execute<T>(operator: string): Promise<T> {
    return this._client?.query(operator).catch((error) => error)
  }

}