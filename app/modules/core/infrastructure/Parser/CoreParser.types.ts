import { z, ZodType } from "zod";

export interface ICoreParser<
    TModelOutputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    _modelOutputDataSchema: TModelOutputDataSchema;
    parseTo(inputData: TModelParserInputData): TModelParserOutputData | never;
}
