import { HttpError } from "~~/app/shared/Error/http.error";
import { ParseError } from "~~/app/shared/Error/parse.error";
import { ValidationError } from "~~/app/shared/Error/validation.error";
import { IExecutor, IUseCaseCallbacks } from "./core.usecase.types";

export class UseCaseCore<TInputArgs, TModelParserOutputData> {
    constructor(
        public executor: IExecutor<TInputArgs, TModelParserOutputData>
    ) {}
    async execute(
        args: TInputArgs,
        {
            respondWithSuccess,
            respondWithClientError,
            respondWithServerError,
            respondWithParseError,
            respondWithValidationError,
        }: IUseCaseCallbacks<TModelParserOutputData>
    ) {
        const result = await this.executor(args);
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
