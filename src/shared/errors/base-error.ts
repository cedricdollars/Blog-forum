export abstract class BaseError extends Error {

    abstract code:string
    protected constructor(readonly message: string,) {
        super(message);
    }
    toJson():SerializedException {
        return {
            message: this.message,
            code: this.code,
            stack: this.stack
        }
    }

}
export interface SerializedException {
    message: string
    code: string
    stack?: string
}