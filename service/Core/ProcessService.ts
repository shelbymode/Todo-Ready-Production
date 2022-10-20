import { ZodType, z } from "zod";
import { CoreEntity } from "~~/entity/Core/CoreEntity";
import { CoreParser } from "~~/parser/Core/CoreParser";
import { IProcessServer } from "./ProcessService.types";

export class ProcessService<
    TModelInputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelOutputDataSchema extends ZodType<unknown, unknown, unknown>,
    TModelParserInputData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TModelParserOutputData extends z.infer<ZodType<unknown, unknown, unknown>>
> implements
        IProcessServer<
            TModelInputDataSchema,
            TModelOutputDataSchema,
            TModelParserInputData,
            TModelParserOutputData
        >
{
    _modelParser: CoreParser<
        TModelOutputDataSchema,
        TModelParserInputData,
        TModelParserOutputData
    >;
    _ModelEntity: typeof CoreEntity<
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
        this._modelParser = modelParser;
        this._ModelEntity = ModelEntity;
    }
    processData(fetchedData: unknown) {
        // Run-time validation from DB (according to input data schema)
        const validatedModel = new this._ModelEntity({
            data: fetchedData as TModelParserInputData,
        });

        // Transformation data (according to output data schema)
        const transformedModel = this._modelParser.parseTo(validatedModel.data);
        return transformedModel;
    }
}
