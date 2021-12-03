import {BaseError} from "./base-error";

export class ServerError extends BaseError {
    private status:number
    public  readonly code: string = "SERVER_INTERNAL_ERROR"
    constructor(message:string, status = 500) {
        super(message);
        this.status = status
    }

}