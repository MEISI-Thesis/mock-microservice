export abstract class AbstractResponse<T> {
    protected constructor(
        private readonly _resourceId: string,
        private readonly _resourceArgs: T
    ) {}

    public get resourceArgs(): T {
        return this._resourceArgs;
    }

    public get resourceId(): string {
        return this._resourceId;
    }
}