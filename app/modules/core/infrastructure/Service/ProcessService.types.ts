import { z, ZodType } from "zod";
import { CoreEntity } from "../../domain/entity/CoreEntity";
import { CoreParser } from "../Parser/CoreParser";

export interface IProcessService<
    TModelInputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelOutputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    modelParser: CoreParser<
        TModelOutputDataSchema,
        TModelParserInputData,
        TModelParserOutputData
    >;
    ModelEntity: typeof CoreEntity<
        TModelInputDataSchema,
        TModelParserInputData
    >;
    processData: (fetchedData: unknown) => TModelParserOutputData | never;
}
