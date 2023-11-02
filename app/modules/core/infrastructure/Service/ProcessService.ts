import { ok, err, Result, Err, Ok } from "neverthrow";
import { ZodType, z } from "zod";
import { ParseError } from "~~/app/shared/Error/ParseError";
import { ValidationError } from "~~/app/shared/Error/ValidationError";
import { CoreEntity } from "../../domain/entity/CoreEntity";
import { CoreParser } from "../Parser/CoreParser";

export class ProcessService<
    TMIDSchema extends ZodType<unknown, unknown, unknown>,
    TMODSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMPOData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    protected readonly modelParser: CoreParser<TMODSchema, TMPIData, TMPOData>;
    protected readonly ModelEntity: typeof CoreEntity<TMIDSchema, TMPIData>;

    constructor({
        modelParser,
        ModelEntity,
    }: {
        modelParser: CoreParser<TMODSchema, TMPIData, TMPOData>;
        ModelEntity: typeof CoreEntity<TMIDSchema, TMPIData>;
    }) {
        this.modelParser = modelParser;
        this.ModelEntity = ModelEntity;
    }
    private validateModel(
        fetchedData: TMPIData
    ): Result<TMPIData, ValidationError> {
        const validatedModel = new this.ModelEntity({
            data: fetchedData,
        });

        if (validatedModel.err) {
            return err(new ValidationError(validatedModel.err.issues));
        }
        return ok(validatedModel.data);
    }
    private transformData(validatedData: TMPIData) {
        return this.modelParser.toDomain(validatedData);
    }
    protected processData(
        fetchedData: TMPIData
    ):
        | Ok<TMPOData, never>
        | Err<TMPIData, ValidationError>
        | Err<TMPOData, ParseError> {
        // Run-time validation from DB (according to input data schema)
        const validatedData = this.validateModel(fetchedData);
        if (validatedData.isErr()) return validatedData;

        // Transformation data (according to output data schema)
        const transformedData = this.transformData(validatedData.value);
        if (transformedData.isErr()) return transformedData;

        return ok(transformedData.value);
    }
}
