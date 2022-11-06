import { HttpError } from "~~/app/shared/Error/http.error";
import { ParseError } from "~~/app/shared/Error/parse.error";
import { ValidationError } from "~~/app/shared/Error/validation.error";
import { EndResult } from "~~/app/shared/types";

type _IUseCaseCallbacks<D> = {
    respondWithSuccess(data: D): void;
    respondWithClientError(error: HttpError): void;
    respondWithServerError(error: HttpError): void;
    respondWithParseError(error: ParseError): void;
    respondWithValidationError(error: ValidationError): void;
};

export interface IUseCaseGetOne<O> {
    getResult(id: string): EndResult<O>;
}

export type IExecutor<A, O> = (args: A) => EndResult<O>;
export type IUseCaseCallbacks<D> = Partial<_IUseCaseCallbacks<D>>;
