import { z, ZodType } from "zod";

export interface IAbstractEntityValidation<
    TModelData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    validate(_data: TModelData): z.SafeParseReturnType<unknown, unknown>;
}
