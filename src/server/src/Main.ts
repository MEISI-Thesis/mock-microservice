import express, { type Application } from "express";
import { EnvService } from "./shared/services/EnvService";
import { Router } from "./Router";

export class Main {
    private readonly _application: Application;
    private readonly _serverPort: number;

    public constructor() {
        this._application = express();
        this._serverPort = EnvService.instance.serverPort
    }

    public defineMiddlewares(): void {
        this._application.use("*", new Router().defineRoutes());
    }

    public initializeServer(): void {
        this._application.listen((this._serverPort), () => {
            console.log(`Server initialized on PORT:${this._serverPort}`)
        })
    }
}

const main = new Main();

/** Method Calling */
main.defineMiddlewares();
main.initializeServer();