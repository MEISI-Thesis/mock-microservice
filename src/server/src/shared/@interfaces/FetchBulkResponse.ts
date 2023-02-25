import { type AbstractResponse } from "../@abstracts/AbstractResponse";

export interface FetchBulkResponse extends AbstractResponse {
    fetchBulk: <T, K>(httpParam?: K) => Promise<Array<T>>
}