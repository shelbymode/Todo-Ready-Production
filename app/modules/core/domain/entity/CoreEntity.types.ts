import { z, ZodType } from "zod";

export interface ICoreEntity<
    TMIDSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<TMIDSchema>
> {
    modelDataSchema: TMIDSchema;
    data: TMPIData;
    validate(
        data: TMPIData
    ): z.SafeParseReturnType<unknown, unknown>;
}
