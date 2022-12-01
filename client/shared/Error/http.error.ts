import { HttpStatusCode } from "../constants";

/*
 * To significant extent is compatible with FetchError object
 */
export class HttpError extends Error {
    statusCode: number;
    statusText: string;

    constructor({
        statusCode,
        message,
    }: {
        statusCode: number;
        message?: string;
    }) {
        super(message);

        this.statusCode = statusCode;
        this.statusText = HttpStatusCode[statusCode];
        this.message = message || this.statusText;
    }

    get isClientError(): boolean {
        return this.statusCode >= 400 && this.statusCode <= 499;
    }

    get isServerError(): boolean {
        return this.statusCode >= 500 && this.statusCode <= 599;
    }
}

export const isHttpError = (e: Error): e is HttpError => {
    return Number.isInteger((e as HttpError).statusCode);
};
