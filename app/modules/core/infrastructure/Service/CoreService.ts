import { ZodType, z } from "zod";
import { HttpService } from "~~/app/shared/Http/HttpService";
import { ICRUDFetchRepository } from "~~/app/shared/types";
import { CoreEntity } from "../../domain/entity/CoreEntity";
import { CoreParser } from "../Parser/CoreParser";
import { ProcessService } from "./ProcessService";

export class CoreService<
    TMIDSchema extends ZodType<unknown, unknown, unknown>,
    TMODSchema extends ZodType<unknown, unknown, unknown>,
    TMPIData extends z.infer<ZodType<unknown, unknown, unknown>>,
    TMPOData extends z.infer<ZodType<unknown, unknown, unknown>>
> extends ProcessService<TMIDSchema, TMODSchema, TMPIData, TMPOData> {
    protected httpService: HttpService = new HttpService();
    protected fetchAPI: ICRUDFetchRepository<TMPIData>;
    constructor({
        fetchAPI,
        modelParser,
        ModelEntity,
    }: {
        fetchAPI: ICRUDFetchRepository<TMPIData>;
        modelParser: CoreParser<TMODSchema, TMPIData, TMPOData>;
        ModelEntity: typeof CoreEntity<TMIDSchema, TMPIData>;
    }) {
        super({
            modelParser,
            ModelEntity,
        });
        this.fetchAPI = fetchAPI;
    }
}
