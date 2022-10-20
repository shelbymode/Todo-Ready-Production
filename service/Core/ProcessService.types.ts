import { z, ZodType } from "zod";
import { CoreEntity } from "~~/entity/Core/CoreEntity";
import { CoreParser } from "~~/parser/Core/CoreParser";

export interface IProcessServer<
    TModelInputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelOutputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    _modelParser: CoreParser<
        TModelOutputDataSchema,
        TModelParserInputData,
        TModelParserOutputData
    >;
    _ModelEntity: typeof CoreEntity<
        TModelInputDataSchema,
        TModelParserInputData
    >;
    processData: (fetchedData: unknown) => TModelParserOutputData | never;
}
