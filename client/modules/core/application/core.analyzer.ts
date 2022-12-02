import { HttpError } from "~~/client/shared/Error/http.error";
import { IAnalyser, IExecutor, IUseCaseCallbacks } from "./core.analyzer.types";

class Analyser<T> implements IAnalyser<T> {
    constructor(public callback: IExecutor<T>) {}
    async check({
        respondWithSuccess,
        respondWithClientError,
        respondWithServerError,
    }: IUseCaseCallbacks<T>) {
        const response = await this.callback();
        if (response.isErr()) {
            const result = response.error;

            if (result instanceof HttpError) {
                if (result.isClientError) {
                    respondWithClientError(result);
                } else if (result.isServerError) {
                    respondWithServerError(result);
                }
            } else {
                console.error(
                    "UNKNOWN URGENT ERROR! THERE IS NOT HANDLER FOR IT"
                );
            }
        } else if (response.isOk()) {
            const result = response.value;
            respondWithSuccess(result);
        }
    }
}

export { Analyser };
