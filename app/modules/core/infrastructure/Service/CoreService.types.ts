import { HttpService } from "~~/app/shared/Http/HttpService";
import { ICRUDRepository } from "~~/app/shared/types";

export interface ICoreService<TMPIData> {
    httpService: HttpService;
    coreAPI: ICRUDRepository<TMPIData>;
}
