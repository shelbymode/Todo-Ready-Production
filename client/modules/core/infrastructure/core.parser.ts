import { err, ok, Result } from "neverthrow";
import { z, ZodType } from "zod";
import { ParseError } from "~~/client/shared/Error/parse.error";
import { ICoreParser } from "./core.parser.types";

export class CoreParser<
    TMODSchema extends ZodType<TMOData, unknown, TMIData>,
    TMIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMOData extends z.infer<ZodType<unknown, unknown, unknown>>
> implements ICoreParser<TMODSchema, TMIData, TMOData>
{
    constructor(readonly _modelOutputDataSchema: TMODSchema) {}
    toDomain(inputData: TMIData): Result<TMOData, ParseError> {
        const transformedData =
            this._modelOutputDataSchema.safeParse(inputData);

        if (transformedData.success == false) {
            return err(new ParseError(transformedData.error.issues));
        } else return ok(transformedData.data);
    }
}
