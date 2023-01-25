import { HttpError } from "~~/client/core/common/Error/http.error";
import { EndResult } from "~~/shared/types";
import { ParseError } from "../Error/parse.error";
import { ValidationError } from "../Error/validation.error";

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
