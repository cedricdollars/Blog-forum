import {UserName} from "../value_objects/UserName";
import {UserEmail} from "../value_objects/UserEmail";

export class User {

    constructor(private id: string,
        private userName: UserName,
        private email: UserEmail,
        private password: string,
        private birthdate: string) { }

    
}
