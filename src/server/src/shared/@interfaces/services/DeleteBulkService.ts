import { type AbstractService } from "../../@abstracts/AbstractService";

export interface DeleteBulkService extends AbstractService {
    deleteBulk: <T, K>(httpParam?: K) => Promise<T>
}