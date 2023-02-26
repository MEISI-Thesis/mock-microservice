import { type AbstractService } from "../../@abstracts/AbstractService";

export interface FetchBulkService extends AbstractService {
    fetchBulk: <T, K>(httpParam?: K) => Promise<Array<T>>
}