import { Result } from "neverthrow";
import { z, ZodType } from "zod";
import { ParseError } from "~~/app/shared/Error/parse.error";

export interface ICoreParser<
    TMODSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMPOData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    modelOutputDataSchema: TMODSchema;
    toDomain(inputData: TMPIData): Result<TMPOData, ParseError>;
}
