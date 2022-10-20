import { CoreParser } from "../Core/CoreParser";
import {
    TTaskOutputDataSchema,
    TTaskParserInputData,
    TTaskParserOutputData,
    taskOutputDataSchema,
} from "./TaskParser.types";

export class TaskParser extends CoreParser<
    TTaskOutputDataSchema,
    TTaskParserInputData,
    TTaskParserOutputData
> {
    constructor() {
        super(taskOutputDataSchema);
    }
}
