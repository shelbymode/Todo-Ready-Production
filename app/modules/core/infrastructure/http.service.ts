import { err, ok, ResultAsync } from "neverthrow";
import {
    TAPIResponse,
    FetchResultServer,
    EndResult,
    FetchResultClient,
} from "~~/app/shared/types";
import { HttpError } from "~~/app/shared/Error/http.error";
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
