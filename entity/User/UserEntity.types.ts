import { z } from "zod";

export enum TEnumGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}
export enum TEnumRole {
    STANDARD = "STANDARD",
    ADMIN = "ADMIN",
}

export const userDataSchema = z
    .object({
        id: z.string(),
        name: z.string(),
        email: z.string().email(),
        gender: z.nativeEnum(TEnumGender),
        role: z.nativeEnum(TEnumRole),
        tasks: z.string().optional().array().optional(),
        createdAt: z.string(),
    })
    .strict();

export type TUserInputDataSchema = typeof userDataSchema;
export type TUserParserInputData = z.infer<TUserInputDataSchema>;
