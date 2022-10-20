import { SafeParseReturnType, z, ZodType } from "zod";
import { ICoreParser } from "./CoreParser.types";

export class CoreParser<
    TModelOutputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> implements ICoreParser<TModelParserInputData, TModelParserOutputData>
{
    _modelOutputDataSchema: TModelOutputDataSchema;
    constructor(modelOutputDataSchema: TModelOutputDataSchema) {
        this._modelOutputDataSchema = modelOutputDataSchema;
    }
    parseTo(inputData: TModelParserInputData) {
        const transformedData = this._modelOutputDataSchema.safeParse(
            inputData
        ) as SafeParseReturnType<TModelParserInputData, TModelParserOutputData>;

        if (transformedData.success == false) throw transformedData.error;
        else return transformedData.data;
    }
}
