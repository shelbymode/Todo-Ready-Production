import { TTaskParserOutputData } from "../Parser/TaskParser.types";

export interface ITaskServiceOperations {
    getTaskById(id: string): Promise<TTaskParserOutputData>;
}
