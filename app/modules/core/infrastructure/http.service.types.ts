import { EndResult, FetchResult, TAPIResponse } from "~~/app/shared/types";

export interface IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): EndResult<T>;
}
