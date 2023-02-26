import { type AbstractService } from "../../@abstracts/AbstractService";

export interface CreateOneService extends AbstractService {
    createOne: <T, K>(httpBody: K) => Promise<T>
}