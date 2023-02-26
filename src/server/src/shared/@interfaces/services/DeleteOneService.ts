import { type AbstractService } from "../../@abstracts/AbstractService";

export interface DeleteOneService extends AbstractService {
    deleteOne: <T, K>(httpParam: K) => Promise<T>
}