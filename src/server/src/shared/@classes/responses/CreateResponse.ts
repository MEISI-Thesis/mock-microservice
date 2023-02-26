import { AbstractResponse } from "@/shared/@abstracts/AbstractResponse";

export class CreateResponse<T> extends AbstractResponse<T> {
    public constructor(
        resourceId: string,
        resourceArgs: T,
        private readonly _resourceURL: string
    ) {
        super(resourceId, resourceArgs);
    }

    public get resourceURL(): string {
        return this._resourceURL;
    }
}