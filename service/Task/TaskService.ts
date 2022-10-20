import { TaskAPI } from "~~/API/Task/TaskAPI";
import { TaskEntity } from "~~/entity/Task/TaskEntity";
import { TaskParser } from "~~/parser/Task/TaskParser";
import { HttpService } from "~~/shared/Http/HttpService";
import { logError } from "~~/utils/logError";
import { ITaskService } from "./TaskService.types";

export class TaskService implements ITaskService {
    _httpService: HttpService;
    _taskAPI: TaskAPI;
    _taskParser: TaskParser;

    constructor() {
        this._httpService = new HttpService();
        this._taskAPI = new TaskAPI();
        this._taskParser = new TaskParser();
    }
    processData(fetchedData: unknown) {
        // Run-time validation from DB (according to input data schema)
        const validatedModel = new TaskEntity({
            data: fetchedData,
        });

        // Transformation data (according to output data schema)
        const transformedModel = this._taskParser.parseTo(validatedModel.data);
        return transformedModel;
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
