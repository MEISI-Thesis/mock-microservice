export abstract class CreateOneService {
  public abstract createOne<T, K>(httpBody: K): Promise<T>;
}