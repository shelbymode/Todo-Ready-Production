import { NuxtError } from "#app";
import { ResultAsync } from "neverthrow";
import { HttpError } from "~~/client/core/common/Error/http.error";
import { ParseError } from "~~/client/core/common/Error/parse.error";
import { ValidationError } from "~~/client/core/common/Error/validation.error";

export type SomeError = HttpError | ValidationError | ParseError;
export type TransformResult<O> = O | ValidationError | ParseError;
export type FetchResultServer<T> = ResultAsync<T, HttpError | NuxtError>;
export type FetchResult<T> = ResultAsync<T, HttpError>;
export type EndResult<T> = ResultAsync<T, SomeError>;
