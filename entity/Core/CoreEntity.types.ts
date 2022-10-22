import { z, ZodType } from "zod";

export interface ICoreEntity<
    TModelInputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<TModelInputDataSchema>
> {
    modelDataSchema: TModelInputDataSchema;
    data: TModelParserInputData;
    validate(
        data: TModelParserInputData
    ): z.SafeParseReturnType<unknown, unknown>;
}
