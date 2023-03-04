import { type AbstractService } from "src/shared/@abstracts/service.abstract";

export interface UpdateOneService extends AbstractService {
  updateOne: <T, K, V>(httpParam: K, httpBody: V) => T
}