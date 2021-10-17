import { UserPassword, UserEmail, UserName } from "../value-objects";

export class User {

    constructor(private id: string,
        private userName: UserName,
        private email: UserEmail,
        private password: UserPassword,
        private birthdate?: string) { }

}
