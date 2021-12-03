import { CreateUSerDTO } from "../dto/createUserDTO";
import { UserDTO } from "../dto/userDTO";
import { User } from "../entity/User";

export interface UserRepository {

    createUser(userDto: CreateUSerDTO): Promise<UserDTO>;

    findUserByEmail(email: string): Promise<UserDTO>;

    findAllUser(): Promise<UserDTO[]>;

    updateUserById(id: string, userDto: UserDTO): Promise<UserDTO>;

    updateUserByEmail(email: string, userDto: UserDTO): Promise<UserDTO>;
}
