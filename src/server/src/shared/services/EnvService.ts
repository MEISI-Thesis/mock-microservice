import { EnvKeyCollection } from "../@constants/EnvKeyCollection";
import "dotenv/config";

export class EnvService {
    private static _instance: EnvService | null = null;

    private constructor() {}

    public static get instance(): EnvService {
        if(this._instance === null) {
            this._instance = new EnvService();
        }

        return this._instance;
    }

    /** Getters */

    public get serverPort(): number {
        return Number(process.env[EnvKeyCollection.SERVER_PORT]) ?? 8200;
    }
}