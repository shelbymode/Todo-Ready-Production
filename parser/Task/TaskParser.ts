import { AbstractParser } from "../Abstract/AbstractParser";
import {
    TTaskOutputDataSchema,
    TTaskParserInputData,
    TTaskParserOutputData,
    taskOutputDataSchema,
} from "./TaskParser.types";

export class TaskParser extends AbstractParser<
    TTaskOutputDataSchema,
    TTaskParserInputData,
    TTaskParserOutputData
> {
    constructor() {
        super(taskOutputDataSchema);
    }
}
