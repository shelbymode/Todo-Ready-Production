import { TTaskParserInputData } from "~~/entity/Task/TaskEntity.types";
import { CoreParser } from "../Core/CoreParser";
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
