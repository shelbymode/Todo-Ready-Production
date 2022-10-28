import { HttpError } from "~~/app/shared/Error/HttpError";
import { ParseError } from "~~/app/shared/Error/ParseError";
import { ValidationError } from "~~/app/shared/Error/ValidationError";
import { EndResult } from "~~/app/shared/types";

import { IUseCaseCallbacks } from "./UseCase.types";

export abstract class UseCase<TModelParserOutputData> {
    abstract getResult(...args: any[]): EndResult<TModelParserOutputData>;
    async execute(
        id: string,
        {
            respondWithSuccess,
            respondWithClientError,
            respondWithServerError,
            respondWithParseError,
            respondWithValidationError,
        }: IUseCaseCallbacks<TModelParserOutputData>
    ) {
        const result = await this.getResult(id);
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
