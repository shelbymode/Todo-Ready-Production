import { ZodType, z } from "zod";
import { ICRUDFetchRepository } from "~~/client/core/common/types";
import { CoreEntity } from "../../../core/common/domain/core.entity";
import { CoreParser } from "./core.parser";
import { ICoreService } from "./core.service.types";
import { HttpService } from "./http.service";
import { ProcessService } from "./process.service";

export class CoreService<
        TMIDSchema extends ZodType<TMIData, unknown, unknown>,
        TMODSchema extends ZodType<TMOData, unknown, TMIData>,
        TMIData extends z.infer<ZodType<unknown, unknown, unknown>>,
        TMOData extends z.infer<ZodType<unknown, unknown, unknown>>
    >
    extends ProcessService<TMIDSchema, TMODSchema, TMIData, TMOData>
    implements ICoreService<TMIDSchema, TMODSchema, TMIData, TMOData>
{
    readonly httpService: HttpService = new HttpService();
    constructor(
        readonly fetchAPI: ICRUDFetchRepository<TMIData>,
        modelParser: CoreParser<TMODSchema, TMIData, TMOData>,
        modelEntity: CoreEntity<TMIDSchema, TMIData>
    ) {
        super(modelEntity, modelParser);
    }
}
