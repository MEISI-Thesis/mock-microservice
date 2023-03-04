import { type AbstractService } from "src/shared/@abstracts/service.abstract";

export interface FetchBulkService extends AbstractService {
  fetchBulk: <T, K>(httpParams?: K) => Array<T>
}