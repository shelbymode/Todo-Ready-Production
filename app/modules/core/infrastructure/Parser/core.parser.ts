import { err, ok, Result } from "neverthrow";
import { SafeParseReturnType, z, ZodType } from "zod";
import { ParseError } from "~~/app/shared/Error/parse.error";
import { ICoreParser } from "./core.parser.types";

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
    toDomain(inputData: TMPIData): Result<TMPOData, ParseError> {
        const transformedData = this.modelOutputDataSchema.safeParse(
            inputData
        ) as SafeParseReturnType<TMPIData, TMPOData>;

        if (transformedData.success == false) {
            return err(new ParseError(transformedData.error.issues));
        } else return ok(transformedData.data);
    }
}
