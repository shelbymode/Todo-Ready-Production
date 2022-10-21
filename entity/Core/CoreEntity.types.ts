import { z, ZodType } from "zod";

export interface ICoreEntity<
    M extends ZodType<unknown, unknown, unknown>,
    I extends z.infer<M>
> {
    modelDataSchema: M;
    data: I;
    validate(data: I): z.SafeParseReturnType<unknown, unknown>;
}
