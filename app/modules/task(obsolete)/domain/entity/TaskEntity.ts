import { CoreEntity } from "~~/app/modules/core/domain/core.entity";
import { taskDataSchema } from "../validation/taskDataSchema";
import { TTaskInputDataSchema, TTaskParserInputData } from "../validation/taskDataSchema.types";

export class TaskEntity extends CoreEntity<TTaskInputDataSchema> {
    constructor({ data, _modelDataSchema = taskDataSchema }: { data: TTaskParserInputData; _modelDataSchema?: TTaskInputDataSchema }) {
        super({ data, _modelDataSchema });
    }
}
