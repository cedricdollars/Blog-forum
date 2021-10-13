export class UserPasswordError extends Error {
    constructor(message:string) {
        super();
        this.message = message
    }
}