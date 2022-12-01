import { ok, err, Result, Err, Ok } from "neverthrow";
import { ZodType, z } from "zod";
import { ParseError } from "~~/client/shared/Error/parse.error";
import { ValidationError } from "~~/client/shared/Error/validation.error";
import { CoreEntity } from "../domain/core.entity";
import { CoreParser } from "./core.parser";
import { IProcessService } from "./process.service.types";

export class ProcessService<
    TMIDSchema extends ZodType<TMIData, unknown, unknown>,
    TMODSchema extends ZodType<TMOData, unknown, TMIData>,
    TMIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMOData extends z.infer<ZodType<unknown, unknown, unknown>>
> implements IProcessService<TMIDSchema, TMODSchema, TMIData, TMOData>
{
    constructor(
        readonly modelEntity: CoreEntity<TMIDSchema, TMIData>,
        readonly modelParser: CoreParser<TMODSchema, TMIData, TMOData>
    ) {}
    validateDTO(fetchedData: TMIData): Result<TMIData, ValidationError> {
        const validatedDTO = this.modelEntity.validateDTO(fetchedData);

        if (validatedDTO.err) {
            return err(new ValidationError(validatedDTO.err.issues));
        }
        return ok(validatedDTO.data);
    }
    transformData(validatedDTO: TMIData) {
        return this.modelParser.toDomain(validatedDTO);
    }
    processData(
        fetchedData: TMIData
    ):
        | Ok<TMOData, never>
        | Err<TMIData, ValidationError>
        | Err<TMOData, ParseError> {
        // Run-time validation from DB (according to input data schema)
        const validatedDTO = this.validateDTO(fetchedData);
        if (validatedDTO.isErr()) return validatedDTO;

        // Transformation data (according to output data schema)
        const transformedData = this.transformData(validatedDTO.value);
        if (transformedData.isErr()) return transformedData;

        return ok(transformedData.value);
    }
}
