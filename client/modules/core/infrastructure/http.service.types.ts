import { EndResult } from "~~/client/core/common/types";
import { TAPIResponse } from "~~/client/core/common/types/response.types";

export interface IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): EndResult<T>;
}
