import {CreateUSerDTO} from "../dto/createUserDTO";
import {UserDTO} from "../dto/userDTO";
import {UserEmail, UserName} from "../vo";
import {User} from "../entity/User";

export interface UserServices {
    createUser(userDto: CreateUSerDTO): Promise<UserDTO>

    findUserByEmail(userEmail: UserEmail): Promise<UserDTO>;

    findAllUser(): Promise<UserDTO[]>;

    updateUserById(id: string, userDto: UserDTO): Promise<UserDTO>;

    updateUserByEmail(userEmail: UserEmail, userDto: UserDTO): Promise<UserDTO>;
}