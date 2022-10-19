import { AsyncData } from "#app";
import { IHttpService } from "./HttpService.types";

export class HttpService<I, O> implements IHttpService<I, O> {
    async run({
        apiCallback,
        parser,
    }: {
        apiCallback: (...args: any[]) => AsyncData<unknown, true>;
        parser: (input: I) => O;
    }): Promise<O | null> {
        const { data: fetchedData, error } = await apiCallback();

        if (error.value) {
            console.log("Error during fetch data...", error.value);
            return null;
        }

        const parsedResult = parser(fetchedData.value as I);

        return parsedResult;
    }
}
