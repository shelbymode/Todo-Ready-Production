import { ZodType, z } from "zod";
import { ICRUDFetchRepository } from "~~/client/core/common/types";
import { HttpService } from "./http.service";
import { ProcessService } from "./process.service";

export interface ICoreService<
    TMIDSchema extends ZodType<TMIData, unknown, unknown>,
    TMODSchema extends ZodType<TMOData, unknown, TMIData>,
    TMIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMOData extends z.infer<ZodType<unknown, unknown, unknown>>
> extends ProcessService<TMIDSchema, TMODSchema, TMIData, TMOData> {
    readonly httpService: HttpService;
    readonly fetchAPI: ICRUDFetchRepository<TMIData>;
}
