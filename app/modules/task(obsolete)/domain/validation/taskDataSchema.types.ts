import { z } from "zod";
import { taskDataSchema } from "./taskDataSchema";

export type TTaskInputDataSchema = typeof taskDataSchema;
export type TTaskParserInputData = z.infer<TTaskInputDataSchema>;
