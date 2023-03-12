export abstract class DeleteOneService {
  public abstract deleteOne<T, K>(httpParams: K): Promise<T>;
}