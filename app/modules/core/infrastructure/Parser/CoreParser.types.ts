import { z, ZodType } from "zod";

export interface ICoreParser<
    TMODSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMPOData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    modelOutputDataSchema: TMODSchema;
    toDomain(inputData: TMPIData): TMPOData | never;
}
