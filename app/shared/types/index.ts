import { AsyncData } from "#app";
import { Result } from "neverthrow";
import { SafeParseReturnType } from "zod";
import { HttpError } from "../Error/HttpError";
import { ParseError } from "../Error/ParseError";
import { ValidationError } from "../Error/ValidationError";
export type CustomError = { data: { message: string; statusCode: number } };
export type TAPIResponse<Data, Error = CustomError> = AsyncData<Data, Error>;

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

export type FetchResult<T> = Promise<Result<T, HttpError>>;
export type TransformResult<O> = O | ValidationError | ParseError;
export type EndResult<O> = Promise<
    O | HttpError | ValidationError | ParseError
>;

export interface ICRUDFetchRepository<TMPIData> {
    getOne(id: string): TAPIResponse<TMPIData>;
    getMany(): TAPIResponse<TMPIData[]>;
    create(user: TMPIData): TAPIResponse<TMPIData>;
    remove(id: string): TAPIResponse<TMPIData>;
    edit({ id, body }: { id: string; body: TMPIData }): TAPIResponse<TMPIData>;
}
