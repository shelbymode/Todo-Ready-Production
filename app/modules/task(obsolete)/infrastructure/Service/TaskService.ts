import { CoreService } from "~~/app/modules/core/infrastructure/core.service";
import { logError } from "~~/app/shared/utils/logError";
import { TaskEntity } from "../../domain/entity/TaskEntity";
import {
    TTaskInputDataSchema,
    TTaskParserInputData,
} from "../../domain/validation/taskDataSchema.types";

import { TaskAPI } from "../API/TaskAPI";
import { TaskParser } from "../Parser/TaskParser";
import {
    TTaskOutputDataSchema,
    TTaskParserOutputData,
} from "../Parser/TaskParser.types";
import { ITaskServiceOperations } from "./TaskService.types";

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
            fetchAPI: new TaskAPI(),
            modelParser: new TaskParser(),
            ModelEntity: TaskEntity,
        });
    }
    async getTaskById(id: string): Promise<TTaskParserOutputData> {
        try {
            // We can't know type (only expect!) from DB without run-time validation
            const fetchedData = await this.httpService.run({
                apiCallback: () => this.fetchAPI.getOne(id),
            });

            //* Validate and transform data
            const transformedData = this.processData(fetchedData as unknown);
            return transformedData;
        } catch (e) {
            logError(e);
        }
    }
}
