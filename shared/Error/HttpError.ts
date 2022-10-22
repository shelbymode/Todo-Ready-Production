import { HttpStatusCode } from "./HttpStatusCode";

interface IHttpError {
    statusCode: number;
    name: string;
    message: string;
}

export class HttpError extends Error implements IHttpError {
    statusCode: number;

    constructor({
        statusCode,
        message,
    }: {
        statusCode: number;
        message?: string;
    }) {
        super(message);
        this.statusCode = statusCode;
        this.name = HttpStatusCode[statusCode];
        this.message = message || HttpStatusCode[statusCode];
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
