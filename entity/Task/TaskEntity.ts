import { AbstractEntity } from "../Abstract/AbstractEntity";
import { TTaskDataSchema, TTaskData, taskDataSchema } from "./TaskEntity.types";

export class TaskEntity extends AbstractEntity<TTaskDataSchema, TTaskData> {
    constructor(_data: TTaskData) {
        super({ _data, _modelDataSchema: taskDataSchema });
    }
}
