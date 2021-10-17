import {CreateUSerDTO} from "../dto/createUserDTO";
import {UserDTO} from "../dto/userDTO";

export interface CreateUserUseCase {
    create(userDto: CreateUSerDTO): Promise<UserDTO>
}