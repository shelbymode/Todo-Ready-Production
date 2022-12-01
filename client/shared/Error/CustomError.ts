import { HttpStatusCode } from "../constants";

export class CustomError extends Error {
    statusCode: number;
    xui: string;

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
}
