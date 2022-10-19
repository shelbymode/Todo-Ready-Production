import { IAbstractEntityValidation } from "./AbstractEntity.types";
import { z, ZodType } from "zod";

export abstract class AbstractEntity<
    TModelDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelData extends z.infer<TModelDataSchema>
> implements IAbstractEntityValidation<TModelData>
{
    private _data: TModelData;
    private _modelDataSchema: TModelDataSchema;
    validate(_data: TModelData) {
        return this._modelDataSchema.safeParse(_data);
    }

    constructor({
        _data,
        _modelDataSchema,
    }: {
        _data: TModelData;
        _modelDataSchema: TModelDataSchema;
    }) {
        this._modelDataSchema = _modelDataSchema;

        const validateResult = this.validate(_data);
        validateResult.success === true
            ? (this._data = _data)
            : console.error("Error validating :(:", validateResult.error);
    }

    get data() {
        return this._data;
    }
}
