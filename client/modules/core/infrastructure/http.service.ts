import { err, ok, ResultAsync } from "neverthrow";

import { HttpError } from "~~/client/shared/Error/http.error";
import { FetchResultClient } from "~~/client/shared/types";
import { TAPIResponse } from "~~/client/shared/types/response.types";
import { IHttpService } from "./http.service.types";

export class HttpService implements IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): FetchResultClient<T> {
        return ResultAsync.fromSafePromise(apiCallback()).andThen(
            (response) => {
                console.log("Response:", response);

                const { data: fetchedData, error } = response;

                console.log("data", fetchedData.value);
                console.log("error", error.value);

                if (error.value) {
                    return err(
                        new HttpError({
                            statusCode: error.value.data.statusCode,
                            message: error.value.data.message,
                        })
                    );
                } else {
                    return ok(fetchedData.value);
                }
            }
        );
    }
}
