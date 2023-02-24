import express, { type Application } from "express";
import { EnvService } from "./shared/services/EnvService";

export class Main {
    private readonly _application: Application;
    private readonly _serverPort: number;

    public constructor() {
        this._application = express();
        this._serverPort = EnvService.instance.serverPort
    }

    public initializeServer(): void {
        this._application.listen((this._serverPort), () => {
            console.log(`Server initialized on PORT:${this._serverPort}`)
        })
    }
}

new Main().initializeServer()