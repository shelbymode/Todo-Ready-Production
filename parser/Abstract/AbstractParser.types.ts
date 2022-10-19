import { z, ZodType } from "zod";

export interface IAbstractParser<
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    parseTo(inputData: TModelParserInputData): TModelParserOutputData | null;
}
