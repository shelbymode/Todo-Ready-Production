import { CoreParser } from "~~/app/modules/core/infrastructure/core.parser";
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
        _modelOutputDataSchema: TTaskOutputDataSchema = taskOutputDataSchema
    ) {
        super(_modelOutputDataSchema);
    }
}
