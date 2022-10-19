import { z, ZodType } from "zod";
import { IAbstractParser } from "./AbstractParser.types";

export abstract class AbstractParser<
    TModelOutputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> implements IAbstractParser<TModelParserInputData, TModelParserOutputData>
{
    private _modelOutputDataSchema: TModelOutputDataSchema;
    constructor(modelOutputDataSchema: TModelOutputDataSchema) {
        this._modelOutputDataSchema = modelOutputDataSchema;
    }
    parseTo(inputData: TModelParserInputData): TModelParserOutputData | null {
        const result = this._modelOutputDataSchema.safeParse(inputData);
        if (result.success) return result.data;
        if (result.success == false) {
            console.error("Error during data transformation:", result.error);
            return null;
        }
    }
}
