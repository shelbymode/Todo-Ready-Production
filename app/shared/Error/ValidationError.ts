import { ZodError, ZodIssue } from "zod";

export class ValidationError extends ZodError {
    name: string;
    constructor(issues: ZodIssue[]) {
        super(issues);
        this.name = "ValidationError";
    }
}
