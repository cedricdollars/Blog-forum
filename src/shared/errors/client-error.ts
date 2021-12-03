import {BaseError} from "./base-error";

export class ClientError extends BaseError {
    code: string;
    constructor(message: string) {
        super(message);
    }

}