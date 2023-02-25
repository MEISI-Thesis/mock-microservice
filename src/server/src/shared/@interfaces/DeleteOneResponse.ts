import { type AbstractResponse } from "../@abstracts/AbstractResponse";

export interface DeleteOneResponse extends AbstractResponse {
    deleteOne: <T, K>(httpParam: K) => Promise<T>
}