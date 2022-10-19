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
        email: z.string(),
        gender: z.nativeEnum(TEnumGender),
        role: z.nativeEnum(TEnumRole),
        tasks: z.string().optional().array().optional(),
    })
    .strict();

export type TUserDataSchema = typeof userDataSchema;
export type TUserData = z.infer<TUserDataSchema>;
