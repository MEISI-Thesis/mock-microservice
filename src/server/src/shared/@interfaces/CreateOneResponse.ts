import { type AbstractResponse } from "../@abstracts/AbstractResponse";

export interface CreateOneResponse extends AbstractResponse {
    createOne: <T, K>(httpBody: K) => Promise<T>
}