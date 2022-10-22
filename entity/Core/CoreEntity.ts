import { z, ZodType } from "zod";
import { ICoreEntity } from "./CoreEntity.types";

export class CoreEntity<
    TModelInputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<TModelInputDataSchema>
> implements ICoreEntity<TModelInputDataSchema, TModelParserInputData>
{
    data: TModelParserInputData;
    modelDataSchema: TModelInputDataSchema;
    validate(data: TModelParserInputData) {
        return this.modelDataSchema.safeParse(data);
    }

    constructor({
        data,
        modelDataSchema,
    }: {
        data: TModelParserInputData;
        modelDataSchema?: TModelInputDataSchema;
    }) {
        this.modelDataSchema = modelDataSchema;

        const validateResult = this.validate(data);
        if (validateResult.success === true) {
            this.data = data;
        } else {
            throw validateResult.error;
        }
    }
}
