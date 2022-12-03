import { z, ZodType } from "zod";
import { ValidationError } from "~~/client/core/common/Error/validation.error";

export class CoreEntity<
    TMIDSchema extends ZodType<
        unknown,
        {
            description?: string;
        },
        unknown
    >
> {
    constructor(readonly modelDataSchema: TMIDSchema) {}
    validateDTO(unknownData: unknown) {
        const validateResult = this.modelDataSchema.safeParse(unknownData);
        let data: null | z.infer<TMIDSchema>;
        let error: null | z.ZodError<unknown>;

        if (validateResult.success === true) {
            data = validateResult.data;
            error = null;
        } else {
            data = null;
            error = new ValidationError(validateResult.error.issues);
        }

        return { data, error };
    }
}
