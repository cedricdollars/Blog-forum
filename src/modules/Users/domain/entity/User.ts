import { UserPassword, UserEmail, UserName } from "../vo";

export class User {

    constructor(private id: string,
        private userName: UserName,
        private email: UserEmail,
        private password: UserPassword,
        private birthdate?: string) { }

}
