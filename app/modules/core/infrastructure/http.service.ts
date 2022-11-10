import { err, ok } from "neverthrow";
import { TAPIResponse, FetchResult } from "~~/app/shared/types";
import { HttpError } from "~~/app/shared/Error/http.error";
import { IHttpService } from "./http.service.types";

export class HttpService implements IHttpService {
    async run<T>(apiCallback: () => TAPIResponse<T>): FetchResult<T> {
        const { data: fetchedData, error } = await apiCallback();

        // Error during network request
        if (error.value) {
            return err(
                new HttpError({
                    message: error.value?.data?.message,
                    statusCode: error.value?.data?.statusCode,
                })
            );
        }

        return ok(fetchedData.value);
    }
}
