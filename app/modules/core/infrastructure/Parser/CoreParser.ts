import { SafeParseReturnType, z, ZodType } from "zod";
import { ICoreParser } from "./CoreParser.types";

export class CoreParser<
    TMODSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMPOData extends z.infer<ZodType<unknown, unknown, unknown>>
> implements ICoreParser<TMODSchema, TMPIData, TMPOData>
{
    modelOutputDataSchema: TMODSchema;
    constructor(modelOutputDataSchema: TMODSchema) {
        this.modelOutputDataSchema = modelOutputDataSchema;
    }
    toDomain(inputData: TMPIData) {
        const transformedData = this.modelOutputDataSchema.safeParse(
            inputData
        ) as SafeParseReturnType<TMPIData, TMPOData>;

        if (transformedData.success == false) throw transformedData.error;
        else return transformedData.data;
    }
}
