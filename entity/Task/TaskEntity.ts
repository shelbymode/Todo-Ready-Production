import { CoreEntity } from "../Core/CoreEntity";
import {
    TTaskInputDataSchema,
    TTaskParserInputData,
    taskDataSchema,
} from "./TaskEntity.types";

export class TaskEntity extends CoreEntity<
    TTaskInputDataSchema,
    TTaskParserInputData
> {
    constructor({
        data,
        modelDataSchema = taskDataSchema,
    }: {
        data: TTaskParserInputData;
        modelDataSchema?: TTaskInputDataSchema;
    }) {
        super({ data, modelDataSchema });
    }
}
