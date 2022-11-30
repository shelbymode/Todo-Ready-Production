import { AsyncData, NuxtError } from "#app";
import { Result, ResultAsync } from "neverthrow";
import { SafeParseReturnType } from "zod";
import { CustomError } from "../Error/CustomError";
import { HttpError } from "../Error/http.error";
import { ParseError } from "../Error/parse.error";
import { ValidationError } from "../Error/validation.error";
export type TAPIResponse<Data = unknown, Error = NuxtError> = AsyncData<
    Data | null,
    { data: Error | null }
>;

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

export type SomeError = HttpError | ValidationError | ParseError | CustomError;
export type TransformResult<O> = O | ValidationError | ParseError;
export type FetchResultServer<T> = ResultAsync<T, NuxtError>;
export type FetchResultClient<T> = ResultAsync<T, HttpError>;
export type EndResult<T> = ResultAsync<T, SomeError>;

export interface ICRUDFetchRepository<TMIData = unknown> {
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

export enum ModeNotification {
    ALERT = "ALERT",
    WARNING = "WARNING",
    INFO = "INFO",
}

export interface INotification {
    id: string;
    isDisplay: boolean;
    text: string;
    mode: ModeNotification;
}

export interface ServerResponse<Data, Error extends SomeError | null> {
    data: Data;
    error: Error;
}

export interface IFailResponse<Error extends SomeError> {
    data: null;
    error: Error;
}

export type ISuccessResponse<T> = T extends NuxtError ? never : T;

export const SuccessResponse = <T>(
    message: string,
    data?: ISuccessResponse<T>
) => ({
    message,
    data,
});
export const FailResponse = (error: NuxtError) => error;
