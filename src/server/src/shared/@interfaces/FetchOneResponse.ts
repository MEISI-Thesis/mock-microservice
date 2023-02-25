import { type AbstractResponse } from "../@abstracts/AbstractResponse";

export interface FetchOneResponse extends AbstractResponse {
    fetchOne: <T, K>(httpParam: K) => Promise<T>
}