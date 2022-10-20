import { extractStatusCode } from "~~/utils/extractStatusCode";
import { HttpError } from "../Error/HttpError";
import { IHttpService, TAPIResponse } from "./HttpService.types";

export class HttpService implements IHttpService {
    async run({
        apiCallback,
    }: {
        apiCallback: TAPIResponse;
    }): Promise<unknown | never> {
        const { data: fetchedData, error } = await apiCallback();

        // Error during network request
        if (error.value)
            throw new HttpError({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore bag?
                statusCode: extractStatusCode(error.value?.message),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore bag?
                message: error.value?.name,
            });

        /// IDK really is it true approach or should be input data type :(
        return fetchedData.value;
    }
}
