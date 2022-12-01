import { NuxtError } from "#app";
import { ResultAsync } from "neverthrow";
import { SafeParseReturnType } from "zod";
import { HttpError } from "../Error/http.error";
import { ParseError } from "../Error/parse.error";
import { ValidationError } from "../Error/validation.error";
import { TAPIResponse } from "./response.types";

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

export type SomeError = HttpError | ValidationError | ParseError;
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
