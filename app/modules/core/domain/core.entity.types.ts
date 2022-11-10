import { z, ZodError, ZodType } from "zod";

export interface ICoreEntity<
    TMIDSchema extends ZodType<TMIData, unknown, unknown>,
    TMIData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    err?: ZodError<unknown>;
    data?: TMIData;
    _modelDataSchema: TMIDSchema;
    validateDTO(data: unknown): this;
}
