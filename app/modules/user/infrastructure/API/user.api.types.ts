import { ICRUDFetchRepository, TAPIResponse } from "~~/app/shared/types";
import { TUserDTO } from "../../domain/user.dto.schema";

export interface IUserAPI extends ICRUDFetchRepository<TUserDTO> {
    getOne(id: string): TAPIResponse<TUserDTO>;
    getMany(): TAPIResponse<TUserDTO[]>;
    create(user: TUserDTO): TAPIResponse<TUserDTO>;
    remove(id: string): TAPIResponse<TUserDTO>;
    edit({ id, body }: { id: string; body: TUserDTO }): TAPIResponse<TUserDTO>;
}
