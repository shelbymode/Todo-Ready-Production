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
import { logError } from "~~/utils/logError";
import { CoreService } from "../Core/CoreService";
import { ITaskServiceOperations } from "./ITaskServiceOperations.types";

export class TaskService
    extends CoreService<
        TTaskInputDataSchema,
        TTaskOutputDataSchema,
        TTaskParserInputData,
        TTaskParserOutputData
    >
    implements ITaskServiceOperations
{
    constructor() {
        super({
            coreAPI: new TaskAPI(),
            modelParser: new TaskParser(),
            ModelEntity: TaskEntity,
        });
    }
    async getTaskById(id: string): Promise<TTaskParserOutputData> {
        try {
            // We can't know type (only expect!) from DB without run-time validation
            const fetchedData = await this.httpService.run({
                apiCallback: () => this.coreAPI.getOne(id),
            });

            //* Validate and transform data
            const transformedData = this.processData(fetchedData as unknown);
            return transformedData;
        } catch (e) {
            logError(e);
        }
    }
}
