import { UserEmail, UserName, UserPassword } from "../value_objects";

export interface UserDTO {
    id: string
    username: UserName
    useremail: UserEmail
    password: UserPassword
}