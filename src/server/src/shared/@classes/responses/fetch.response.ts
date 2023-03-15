import { AbstractResponse } from './../../@abstracts/response.abstract';

export class FetchResponse<T> extends AbstractResponse<T> {
  public constructor (
    resourceId: string,
    resourceArgs: T
  ) {
    super(resourceId, resourceArgs);
  }
}
