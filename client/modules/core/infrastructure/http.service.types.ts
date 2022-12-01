import { EndResult, FetchResult, TAPIResponse } from "~~/client/shared/types";

export interface IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): EndResult<T>;
}
