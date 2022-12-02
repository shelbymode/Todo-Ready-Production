import { HttpError } from "~~/client/shared/Error/http.error";
import { ParseError } from "~~/client/shared/Error/parse.error";
import { ValidationError } from "~~/client/shared/Error/validation.error";
import { EndResult } from "~~/client/shared/types";

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

export type IExecutor<O> = () => EndResult<O>;
export type IUseCaseCallbacks<D> = Partial<_IUseCaseCallbacks<D>>;

export interface IAnalyser<TMOData> {
    readonly callback: IExecutor<TMOData>;
    check({
        respondWithSuccess,
        respondWithClientError,
        respondWithServerError,
        respondWithParseError,
        respondWithValidationError,
    }: IUseCaseCallbacks<TMOData>);
}
