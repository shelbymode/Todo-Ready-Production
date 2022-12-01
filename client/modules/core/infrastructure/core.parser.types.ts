import { Result } from "neverthrow";
import { z, ZodType } from "zod";
import { ParseError } from "~~/client/shared/Error/parse.error";

export interface ICoreParser<
    TMODSchema extends ZodType<TMOData, unknown, TMIData>,
    TMIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMOData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    _modelOutputDataSchema: TMODSchema;
    toDomain(inputData: TMIData): Result<TMOData, ParseError>;
}
