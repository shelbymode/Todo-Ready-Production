import { HttpError } from "../Error/HttpError";
import { FetchResult, TAPIResponse } from "../types";
import { IHttpService } from "./HttpService.types";
import { err, ok } from "neverthrow";

export class HttpService implements IHttpService {
    async run<T>(apiCallback: () => TAPIResponse<T>): FetchResult<T> {
        const { data: fetchedData, error } = await apiCallback();

        // Error during network request
        if (error.value) {
            return err(
                new HttpError({
                    message: error.value.data.message,
                    statusCode: error.value.data.statusCode,
                })
            );
        }

        return ok(fetchedData.value);
    }
}