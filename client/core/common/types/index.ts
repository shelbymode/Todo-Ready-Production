import { SafeParseReturnType } from "zod";

export type TParser<I, O> = (input: I) => SafeParseReturnType<I, O>;

export enum ModeNotification {
    ALERT = "ALERT",
    WARNING = "WARNING",
    INFO = "INFO",
}

export interface INotification {
    id: string;
    isDisplay: boolean;
    text: string;
    mode: ModeNotification;
}
