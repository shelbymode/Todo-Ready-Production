import { HttpError } from "~~/client/shared/Error/http.error";
import {
    IExecutor,
    IUseCaseCallbacks,
    IUseCaseCore,
} from "./core.usecase.types";

export class UseCaseCore<TIArgs, TMOData>
    implements IUseCaseCore<TIArgs, TMOData>
{
    constructor(readonly _executor: IExecutor<TIArgs, TMOData>) {}
    async execute(
        args: TIArgs,
        {
            respondWithSuccess,
            respondWithClientError,
            respondWithServerError,
        }: IUseCaseCallbacks<TMOData>
    ) {
        const response = await this._executor(args);
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
