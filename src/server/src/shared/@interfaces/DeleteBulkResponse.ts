import { type AbstractResponse } from "../@abstracts/AbstractResponse";

export interface DeleteBulkResponse extends AbstractResponse {
    deleteBulk: <T, K>(httpParam?: K) => Promise<T>
}