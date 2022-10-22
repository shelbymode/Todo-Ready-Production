import { AsyncData } from "#app";
import { SafeParseReturnType } from "zod";

export type TAPIResponse<T> = () => Promise<
    AsyncData<T, true | { message: string; name: string }>
>;

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

export interface ICRUDRepository<TMPIData> {
    getOne(
        id: string
    ): Promise<AsyncData<TMPIData, true | { message: string; name: string }>>;
    getMany(): Promise<
        AsyncData<TMPIData[], true | { message: string; name: string }>
    >;

    create(
        user: TMPIData
    ): Promise<AsyncData<TMPIData, true | { message: string; name: string }>>;
    remove(
        id: string
    ): Promise<AsyncData<TMPIData, true | { message: string; name: string }>>;
    edit({
        id,
        user,
    }: {
        id: string;
        user: TMPIData;
    }): Promise<AsyncData<TMPIData, true | { message: string; name: string }>>;
}
