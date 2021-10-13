export class UserNameError extends Error {
    constructor(message:string) {
        super();
        this.message = message
    }
}