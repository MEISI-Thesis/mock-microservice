import { AbstractResponse } from "@/shared/@abstracts/AbstractResponse";

export class FetchResponse<T> extends AbstractResponse<T> {
    public constructor(
        resourceId: string,
        resourceArgs: T
    ) {
        super(resourceId, resourceArgs);
    }
}