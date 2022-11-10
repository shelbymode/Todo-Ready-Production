import { AsyncData } from "#app";
import { Result } from "neverthrow";
import { SafeParseReturnType } from "zod";
import { HttpError } from "../Error/http.error";
import { ParseError } from "../Error/parse.error";
import { ValidationError } from "../Error/validation.error";
export type CustomError = { data: { message: string; statusCode: number } };
export type TAPIResponse<Data = any, Error = CustomError> = AsyncData<Data, Error>;

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

export type FetchResult<T> = Promise<Result<T, HttpError>>;
export type TransformResult<O> = O | ValidationError | ParseError;
export type EndResult<O> = Promise<O | HttpError | ValidationError | ParseError>;

export interface ICRUDFetchRepository<TMIData = any> {
    getOne(id: string): TAPIResponse<TMIData>;
    getMany(): TAPIResponse<TMIData[]>;
    create(user: TMIData): TAPIResponse<TMIData>;
    remove(id: string): TAPIResponse<TMIData>;
    edit({ id, body }: { id: string; body: TMIData }): TAPIResponse<TMIData>;
}

export interface PoorError {
    message: "something went wrong";
    error: Error;
}
