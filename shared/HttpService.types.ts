import { AsyncData } from "#app";

type TAPIRequest = (...args: any[]) => AsyncData<unknown, true>;
type TParser<I, O> = (input: I) => O | null;

export interface IHttpService<I, O> {
    run({
        apiCallback,
        parser,
    }: {
        apiCallback: TAPIRequest;
        parser: TParser<I, O>;
    }): Promise<O | null>;
}
