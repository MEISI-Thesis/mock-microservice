import { AbstractResponse } from "@/shared/@abstracts/AbstractResponse";

export class DeleteResponse<T> extends AbstractResponse<T> {
    public constructor(
        resourceId: string,
        resourceArgs: T,
        private readonly _oldResourceURL: string,
    ) {
        super(resourceId, resourceArgs);
    }

    public get oldResourceURL(): string {
        return this._oldResourceURL;
    }
}