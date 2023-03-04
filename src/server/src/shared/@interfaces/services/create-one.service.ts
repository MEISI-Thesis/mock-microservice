import { type AbstractService } from "src/shared/@abstracts/service.abstract";

export interface CreateOneService extends AbstractService {
  createOne: <T, K>(httpBody: K) => T
}