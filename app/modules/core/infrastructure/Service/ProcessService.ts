import { ZodType, z } from "zod";
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
    protected processData(fetchedData: unknown) {
        // Run-time validation from DB (according to input data schema)
        const validatedModel = new this.ModelEntity({
            data: fetchedData as TMPIData,
        });

        // Transformation data (according to output data schema)
        const transformedModel = this.modelParser.toDomain(validatedModel.data);
        return transformedModel;
    }
}
