import { EndResult } from "~~/client/shared/types";
import { TAPIResponse } from "~~/client/shared/types/response.types";

export interface IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): EndResult<T>;
}
