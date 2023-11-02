import { ICRUDFetchRepository, TAPIResponse } from "~~/app/shared/types";
import { TUserParserInputData } from "../../domain/validation/userDataSchema.types";

export interface IUserAPI extends ICRUDFetchRepository<TUserParserInputData> {
    getOne(id: string): TAPIResponse<TUserParserInputData>;
    getMany(): TAPIResponse<TUserParserInputData[]>;
    create(user: TUserParserInputData): TAPIResponse<TUserParserInputData>;
    remove(id: string): TAPIResponse<TUserParserInputData>;
    edit({
        id,
        body,
    }: {
        id: string;
        body: TUserParserInputData;
    }): TAPIResponse<TUserParserInputData>;
}
