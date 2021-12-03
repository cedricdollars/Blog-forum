import { UserEmail, UserPassword } from "../vo";
import { UserName } from "../vo";

export interface CreateUSerDTO {
    username: UserName
    useremail: UserEmail
    password: UserPassword
}