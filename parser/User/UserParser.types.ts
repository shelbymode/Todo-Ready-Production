import { z } from "zod";
import { TEnumGender, TEnumRole } from "~~/entity/User/UserEntity.types";
import { TUserData } from "~~/entity/User/UserEntity.types";
import { toCapitalize } from "~~/utils/toCapitalize";

export const userOutputDataSchema = z
    .object({
        id: z.string(),
        name: z.string().transform((val) => toCapitalize(val)),
        email: z.string().email(),
        gender: z.nativeEnum(TEnumGender),
        role: z.nativeEnum(TEnumRole),
        tasks: z.string().optional().array().optional(),
        createdAt: z.string().transform((val) => new Date(val)),
    })
    .strict();

export type TUserOutputDataSchema = typeof userOutputDataSchema;
export type TUserParserInputData = TUserData;
export type TUserParserOutputData = z.infer<TUserOutputDataSchema>;
