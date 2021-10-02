import { UserEmail, UserPassword } from "../value_objects";
import { UserName } from "../value_objects/UserName";

export interface CreateUSerDTO {
    username: UserName
    useremail: UserEmail
    password: UserPassword
}