import { ZodType, z } from "zod";
import { CoreEntity } from "../../domain/entity/CoreEntity";
import { CoreParser } from "../Parser/CoreParser";
import { IProcessService } from "./ProcessService.types";

export class ProcessService<
    TModelInputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelOutputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> implements
        IProcessService<
            TModelInputDataSchema,
            TModelOutputDataSchema,
            TModelParserInputData,
            TModelParserOutputData
        >
{
    modelParser: CoreParser<
        TModelOutputDataSchema,
        TModelParserInputData,
        TModelParserOutputData
    >;
    ModelEntity: typeof CoreEntity<
        TModelInputDataSchema,
        TModelParserInputData
    >;

    constructor({
        modelParser,
        ModelEntity,
    }: {
        modelParser: CoreParser<
            TModelOutputDataSchema,
            TModelParserInputData,
            TModelParserOutputData
        >;
        ModelEntity: typeof CoreEntity<
            TModelInputDataSchema,
            TModelParserInputData
        >;
    }) {
        this.modelParser = modelParser;
        this.ModelEntity = ModelEntity;
    }
    processData(fetchedData: unknown) {
        // Run-time validation from DB (according to input data schema)
        const validatedModel = new this.ModelEntity({
            data: fetchedData as TModelParserInputData,
        });

        // Transformation data (according to output data schema)
        const transformedModel = this.modelParser.parseTo(validatedModel.data);
        return transformedModel;
    }
}
