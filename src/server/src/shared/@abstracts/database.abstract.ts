import { Client } from "pg";

export abstract class AbstractDatabase {
  protected _client: Client | null = null;
  protected constructor() {
    this._client = new Client();
  }
  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract execute<T>(operator: string): Promise<T>;
}