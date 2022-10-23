import { AsyncData } from "#app";
import { SafeParseReturnType } from "zod";

export type TAPIResponse<T> = Promise<
    AsyncData<T, true | { message: string; name: string }>
>;

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

export interface ICRUDFetchRepository<TMPIData> {
    getOne(id: string): TAPIResponse<TMPIData>;
    getMany(): TAPIResponse<TMPIData[]>;
    create(user: TMPIData): TAPIResponse<TMPIData>;
    remove(id: string): TAPIResponse<TMPIData>;
    edit({ id, body }: { id: string; body: TMPIData }): TAPIResponse<TMPIData>;
}
