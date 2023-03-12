export abstract class FetchOneService {
  public abstract fetchOne<T, K>(httpParams: K): Promise<T>;
}