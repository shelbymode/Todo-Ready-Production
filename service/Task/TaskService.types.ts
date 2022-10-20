import { TTaskParserOutputData } from "~~/parser/Task/TaskParser.types";

export interface ITaskService {
    getOneTask: (id: string) => Promise<TTaskParserOutputData | never>;
}
