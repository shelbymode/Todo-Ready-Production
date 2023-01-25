import { TAPIResponse } from "~~/client/core/common/types/response.types";
import { EndResult } from "~~/shared/types";

export interface IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): EndResult<T>;
}
