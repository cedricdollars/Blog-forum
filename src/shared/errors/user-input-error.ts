export class UserInputError extends Error {
    constructor(message:string) {
        super();
        this.message = message
    }
}