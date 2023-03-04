import { type AbstractService } from "src/shared/@abstracts/service.abstract";

export interface FetchOneService extends AbstractService {
  fetchOne: <T, K>(httpParams: K) => T
}