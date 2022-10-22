import { TAPIResponse } from "../types";

export interface IHttpService {
    run<T>({
        apiCallback,
    }: {
        apiCallback: TAPIResponse<T>;
    }): Promise<T | never>;
}
