interface IHttpError extends Error {
    status: number;
    message: string;
}
