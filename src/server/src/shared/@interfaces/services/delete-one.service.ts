import { type AbstractService } from "src/shared/@abstracts/service.abstract";

export interface DeleteOneService extends AbstractService {
  deleteOne: <T, K>(httpParam: K) => T
}