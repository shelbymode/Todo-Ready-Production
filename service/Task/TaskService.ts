import { TaskAPI } from "~~/API/Task/TaskAPI";
import { TaskEntity } from "~~/entity/Task/TaskEntity";
import {
    TTaskInputDataSchema,
    TTaskParserInputData,
} from "~~/entity/Task/TaskEntity.types";
import { TaskParser } from "~~/parser/Task/TaskParser";
import {
    TTaskOutputDataSchema,
    TTaskParserOutputData,
} from "~~/parser/Task/TaskParser.types";
import { HttpService } from "~~/shared/Http/HttpService";
import { logError } from "~~/utils/logError";
import { ProcessService } from "../Core/ProcessService";
import { ITaskService } from "./TaskService.types";

export class TaskService
    extends ProcessService<
        TTaskInputDataSchema,
        TTaskOutputDataSchema,
        TTaskParserInputData,
        TTaskParserOutputData
    >
    implements ITaskService
{
    _httpService: HttpService;
    _taskAPI: TaskAPI;
    constructor() {
        super({
            modelParser: new TaskParser(),
            ModelEntity: TaskEntity,
        });
        this._httpService = new HttpService();
        this._taskAPI = new TaskAPI();
    }
    async getOneTask(id: string) {
        try {
            // We can't know type from DB without run-time validation
            const fetchedData = await this._httpService.run({
                apiCallback: () => this._taskAPI.getOneTask(id),
            });

            //* Validate and transform data
            const transformedData = this.processData(fetchedData);
            return transformedData;
        } catch (e) {
            logError(e);
        }
    }
}
