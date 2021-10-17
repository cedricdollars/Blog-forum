import { CreateUSerDTO } from "../dto/createUserDTO";
import { UserDTO } from "../dto/userDTO";
import { User } from "../entity/User";

export interface UserRepository {

    createUser(userdto: CreateUSerDTO): Promise<UserDTO>;

    findUserByEmail(email: string): Promise<User>;

    findAllUser(): Promise<UserDTO[]>;

    updateUserById(id: string, userdto: UserDTO): Promise<UserDTO>;

    updateUserByEmail(email: string, userdto: UserDTO): Promise<User>;
}
