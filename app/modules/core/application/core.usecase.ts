import { z, ZodType } from "zod";
import { HttpError } from "~~/app/shared/Error/http.error";
import { ParseError } from "~~/app/shared/Error/parse.error";
import { ValidationError } from "~~/app/shared/Error/validation.error";
import { IExecutor, IUseCaseCallbacks, IUseCaseCore } from "./core.usecase.types";

export class UseCaseCore<TIArgs extends object, TMOData extends z.infer<ZodType<unknown, unknown, unknown>>>
    implements IUseCaseCore<TIArgs, TMOData>
{
    constructor(readonly _executor: IExecutor<TIArgs, TMOData>) {}
    async execute(
        args: TIArgs,
        {
            respondWithSuccess,
            respondWithClientError,
            respondWithServerError,
            respondWithParseError,
            respondWithValidationError,
        }: IUseCaseCallbacks<TMOData>
    ) {
        const result = await this._executor(args);
        if (result instanceof HttpError) {
            if (result.isClientError) {
                respondWithClientError(result);
                return;
            } else if (result.isServerError) {
                respondWithServerError(result);
                return;
            }
        } else if (result instanceof ValidationError) {
            respondWithValidationError(result);
            return;
        } else if (result instanceof ParseError) {
            respondWithParseError(result);
            return;
        } else if (result instanceof Error) {
            console.error("UNKNOWN URGENT ERROR! THERE IS NOT HANDLER FOR IT");
            return;
        } else {
            respondWithSuccess(result);
        }
    }
}
