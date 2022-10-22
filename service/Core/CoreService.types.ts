import { HttpService } from "~~/shared/Http/HttpService";
import { ICRUDRepository } from "~~/shared/types";

export interface ICoreService<TMPIData> {
    httpService: HttpService;
    coreAPI: ICRUDRepository<TMPIData>;
}
