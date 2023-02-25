/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express"

export class Router {
    private readonly _context = initTRPC.context;
    private readonly _createdTRPC = initTRPC.create();

    public defineRoutes() {
        return trpcExpress.createExpressMiddleware({
            createContext: this._context,
            router: this._createdTRPC.router({})
        })
    }
}