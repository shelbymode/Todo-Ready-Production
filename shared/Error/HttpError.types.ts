interface IHttpError extends Error {
    statusCode: number;
    name: string;
    message: string;
}
