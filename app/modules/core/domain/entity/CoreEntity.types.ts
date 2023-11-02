import { z, ZodError, ZodType } from "zod";

export interface ICoreEntity<
    TMIDSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<TMIDSchema>
> {
    modelDataSchema: TMIDSchema;
    err: ZodError<unknown>;
    data: TMPIData;
    validate(data: TMPIData): z.SafeParseReturnType<unknown, unknown>;
}
