import { AsyncData } from "#app";

export type TAPIResponse = (
    ...args: any[]
) => AsyncData<unknown, true | { message: string; name: string }>;

export interface IHttpService {
    run({
        apiCallback,
    }: {
        apiCallback: TAPIResponse;
    }): Promise<unknown | never>;
}
