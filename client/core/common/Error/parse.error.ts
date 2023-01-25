import { ZodError, ZodIssue } from "zod";

export class ParseError extends ZodError {
    name: string;
    constructor(issues: ZodIssue[]) {
        super(issues);
        this.name = "ParseError";
    }
}
