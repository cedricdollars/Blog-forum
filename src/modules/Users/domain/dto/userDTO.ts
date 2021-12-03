import { UserEmail, UserName, UserPassword } from "../vo";

export interface UserDTO {
    id: string
    username: UserName
    useremail: UserEmail
    password: UserPassword
}