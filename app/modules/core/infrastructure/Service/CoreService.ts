import { ZodType, z } from "zod";
import { HttpService } from "~~/app/shared/Http/HttpService";
import { ICRUDRepository } from "~~/app/shared/types";
import { CoreEntity } from "../../domain/entity/CoreEntity";
import { CoreParser } from "../Parser/CoreParser";
import { ICoreService } from "./CoreService.types";
import { ProcessService } from "./ProcessService";

export class CoreService<
        TMIDSchema extends ZodType<unknown, unknown, unknown>,
        TMODSchema extends ZodType<unknown, unknown, unknown>,
        TMPIData extends z.infer<ZodType<unknown, unknown, unknown>>,
        TMPOData extends z.infer<ZodType<unknown, unknown, unknown>>
    >
    extends ProcessService<TMIDSchema, TMODSchema, TMPIData, TMPOData>
    implements ICoreService<TMPIData>
{
    httpService: HttpService = new HttpService();
    coreAPI: ICRUDRepository<TMPIData>;
    constructor({
        coreAPI,
        modelParser,
        ModelEntity,
    }: {
        coreAPI: ICRUDRepository<TMPIData>;
        modelParser: CoreParser<TMODSchema, TMPIData, TMPOData>;
        ModelEntity: typeof CoreEntity<TMIDSchema, TMPIData>;
    }) {
        super({
            modelParser,
            ModelEntity,
        });
        this.coreAPI = coreAPI;
    }
}
