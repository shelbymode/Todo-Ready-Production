import { CoreEntity } from "../Core/CoreEntity";
import { TTaskDataSchema, TTaskData, taskDataSchema } from "./TaskEntity.types";

export class TaskEntity extends CoreEntity<TTaskDataSchema, TTaskData> {
    constructor({
        data,
        modelDataSchema = taskDataSchema,
    }: {
        data: TTaskData;
        modelDataSchema?: TTaskDataSchema;
    }) {
        super({ data, modelDataSchema });
    }
}
