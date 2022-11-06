import { z } from "zod";
import { userDataSchema } from "./userDataSchema";

export enum TEnumGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}
export enum TEnumRole {
    STANDARD = "STANDARD",
    ADMIN = "ADMIN",
}

export type TUserInputDataSchema = typeof userDataSchema;
export type TUserParserInputData = z.infer<TUserInputDataSchema>;
