import { AsyncData } from "#app";
import { SafeParseReturnType } from "zod";

export type TAPIResponse<T> = () => Promise<
    AsyncData<T, true | { message: string; name: string }>
>;

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICRUDRepository<O> {
    getOne(data?: any): Promise<O | never>;
    // getMany(data?: any): Promise<O | never>;
    // create(data?: any): Promise<O | never>;
    // edit(data?: any): Promise<O | never>;
    // remove(data?: any): Promise<O | never>;
}
