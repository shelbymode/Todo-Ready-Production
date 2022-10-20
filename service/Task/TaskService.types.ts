import { TaskAPI } from "~~/API/Task/TaskAPI";
import { TaskParser } from "~~/parser/Task/TaskParser";
import { TTaskParserOutputData } from "~~/parser/Task/TaskParser.types";
import { HttpService } from "~~/shared/Http/HttpService";

export interface ITaskService {
    _httpService: HttpService;
    _taskAPI: TaskAPI;
    _taskParser: TaskParser;
    processData: (fetchedData: unknown) => TTaskParserOutputData | never;
    getOneTask: (id: string) => Promise<TTaskParserOutputData | never>;
}
