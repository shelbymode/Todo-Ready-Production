import { FetchResult, TAPIResponse } from "../types";

export interface IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): FetchResult<T>;
}
