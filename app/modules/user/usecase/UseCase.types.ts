import { HttpError } from "~~/app/shared/Error/HttpError";
import { ParseError } from "~~/app/shared/Error/ParseError";
import { ValidationError } from "~~/app/shared/Error/ValidationError";
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

export type IUseCaseCallbacks<D> = Partial<_IUseCaseCallbacks<D>>;
// export type IUseCaseCallbacks<D> = _IUseCaseCallbacks<D>;
