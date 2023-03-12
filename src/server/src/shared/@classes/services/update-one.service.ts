export abstract class UpdateOneService {
  public abstract updateOne<T, K, V>(httpParams: K, httpBody: V): Promise<T>;
}