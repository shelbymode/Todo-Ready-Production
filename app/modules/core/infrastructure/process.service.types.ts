import { Result, Ok, Err } from "neverthrow";
import { ZodType, z } from "zod";
import { ParseError } from "~~/app/shared/Error/parse.error";
import { ValidationError } from "~~/app/shared/Error/validation.error";
import { CoreEntity } from "../domain/core.entity";
import { CoreParser } from "./core.parser";

export interface IProcessService<
    TMIDSchema extends ZodType<TMIData, unknown, unknown>,
    TMODSchema extends ZodType<TMOData, unknown, TMIData>,
    TMIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMOData extends z.infer<ZodType<unknown, unknown, unknown>>
> {
    readonly modelEntity: CoreEntity<TMIDSchema, TMIData>;
    readonly modelParser: CoreParser<TMODSchema, TMIData, TMOData>;
    validateDTO(fetchedData: unknown): Result<TMIData, ValidationError>;
    transformData(validatedDTO: TMIData): Result<TMOData, ParseError>;
    processData(fetchedData: TMIData): Ok<TMOData, never> | Err<TMIData, ValidationError> | Err<TMOData, ParseError>;
}
