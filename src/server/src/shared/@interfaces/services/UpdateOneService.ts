import { type AbstractService } from "../../@abstracts/AbstractService";

export interface UpdateOneService extends AbstractService {
    updateOne: <T, K, V>(httpParam: K, httpBody: V) => Promise<T>
}