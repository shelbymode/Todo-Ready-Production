import { z, ZodError, ZodType } from "zod";
import { ICoreEntity } from "./core.entity.types";

export class CoreEntity<
    TMIDSchema extends ZodType<TMIData, unknown, unknown>,
    TMIData extends z.infer<ZodType<unknown, unknown, unknown>> = z.infer<TMIDSchema>
> implements ICoreEntity<TMIDSchema, TMIData>
{
    data?: TMIData;
    err?: ZodError<unknown>;
    validateDTO(data: unknown) {
        const validateResult = this._modelDataSchema.safeParse(data);

        if (validateResult.success === true) {
            this.data = validateResult.data;
        } else {
            this.err = validateResult.error;
        }
        return this;
    }

    constructor(readonly _modelDataSchema: TMIDSchema) {}
}
