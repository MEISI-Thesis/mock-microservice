import { type AbstractService } from "../../@abstracts/AbstractService";

export interface FetchOneService extends AbstractService {
    fetchOne: <T, K>(httpParam: K) => Promise<T>
}