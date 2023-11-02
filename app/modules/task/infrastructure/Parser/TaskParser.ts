import { CoreParser } from "~~/app/modules/core/infrastructure/Parser/CoreParser";
import { TTaskParserInputData } from "../../domain/validation/taskDataSchema.types";
import {
    TTaskOutputDataSchema,
    TTaskParserOutputData,
    taskOutputDataSchema,
} from "./TaskParser.types";

export class TaskParser extends CoreParser<
    TTaskOutputDataSchema,
    TTaskParserInputData,
    TTaskParserOutputData
> {
    constructor(
        modelOutputDataSchema: TTaskOutputDataSchema = taskOutputDataSchema
    ) {
        super(modelOutputDataSchema);
    }
}
