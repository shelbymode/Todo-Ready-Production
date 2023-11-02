import { z, ZodError, ZodType } from "zod";
import { ICoreEntity } from "./CoreEntity.types";

export class CoreEntity<
    TMIDSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<TMIDSchema>
> implements ICoreEntity<TMIDSchema, TMPIData>
{
    data: TMPIData;
    err: ZodError<unknown>;
    modelDataSchema: TMIDSchema;
    validate(data: TMPIData) {
        return this.modelDataSchema.safeParse(data);
    }

    constructor({
        data,
        modelDataSchema,
    }: {
        data: TMPIData;
        modelDataSchema?: TMIDSchema;
    }) {
        this.modelDataSchema = modelDataSchema;

        const validateResult = this.validate(data);
        if (validateResult.success === true) {
            this.data = data;
        } else {
            this.err = validateResult.error;
        }
        return this;
    }
}
