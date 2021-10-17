import { UserEmail, UserPassword } from "../value-objects";
import { UserName } from "../value-objects";

export interface CreateUSerDTO {
    username: UserName
    useremail: UserEmail
    password: UserPassword
}