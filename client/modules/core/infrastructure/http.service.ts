import { FetchResult } from "./../../../../shared/types/index";
import { err, ok, ResultAsync } from "neverthrow";
import { HttpError } from "~~/client/core/common/Error/http.error";
import { TAPIResponse } from "~~/client/core/common/types/response.types";

import { IHttpService } from "./http.service.types";

export class HttpService implements IHttpService {
    run<T>(apiCallback: () => TAPIResponse<T>): FetchResult<T> {
        return ResultAsync.fromSafePromise(apiCallback()).andThen(
            (response) => {
                console.log("Response:", response);

                const { data, error } = response;

                if (error.value) {
                    return err(
                        new HttpError({
                            statusCode: error.value.data.statusCode,
                            message: error.value.data.message,
                        })
                    );
                } else {
                    return ok(data.value);
                }
            }
        );
    }
}
