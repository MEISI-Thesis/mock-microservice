import { type AbstractResponse } from "../@abstracts/AbstractResponse";

export interface UpdateOneResponse extends AbstractResponse {
    updateOne: <T, K, V>(httpParam: K, httpBody: V) => Promise<T>
}