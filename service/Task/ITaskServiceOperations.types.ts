import { TTaskParserOutputData } from "~~/parser/Task/TaskParser.types";

export interface ITaskServiceOperations {
    getTaskById(id: string): Promise<TTaskParserOutputData>;
}
