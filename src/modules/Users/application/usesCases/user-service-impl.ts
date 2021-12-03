import {UserServices} from "../../domain/services";
import {CreateUSerDTO} from "../../domain/dto/createUserDTO";
import {UserDTO} from "../../domain/dto/userDTO";
import {UserEmail, UserPassword} from "../../domain/vo";
import {UserRepository} from "../../domain/repositories";

export class UserServiceImpl implements UserServices {
    constructor(private readonly repository: UserRepository) {
    }

    async createUser(data: CreateUSerDTO): Promise<UserDTO> {
        return this.repository.createUser(data);
    }

    async findAllUser(): Promise<UserDTO[]> {
        return Promise.resolve([]);
    }

    async findUserByEmail(userEmail: UserEmail): Promise<UserDTO> {
        throw new Error("Not implemented")
    }

    async updateUserByEmail(userEmail: UserEmail, userdto: UserDTO): Promise<UserDTO> {
        throw new Error("Not implemented")
    }

    async updateUserById(id: string, userdto: UserDTO): Promise<UserDTO> {
        throw new Error("Not implemented")
    }

}


