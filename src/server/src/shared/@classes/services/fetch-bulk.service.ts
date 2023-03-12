export abstract class FetchBulkService {
  public abstract fetchOne<T, K>(httpParams?: K): Promise<Array<T>>;
}