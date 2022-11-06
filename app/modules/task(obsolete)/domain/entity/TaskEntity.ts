import { CoreEntity } from "~~/app/modules/core/domain/core.entity";
import { taskDataSchema } from "../validation/taskDataSchema";
import {
    TTaskInputDataSchema,
    TTaskParserInputData,
} from "../validation/taskDataSchema.types";

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
