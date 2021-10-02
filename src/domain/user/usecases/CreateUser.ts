import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entity/User";
import { UserDTO } from "../dto/userDTO";
import { CreateUSerDTO } from "../dto/createUserDTO";

export class CreateUser {

    constructor(private readonly repository : UserRepository) {}

    async create(userdto: CreateUSerDTO): Promise<UserDTO> {
        return this.repository.createUser(userdto);
    }
}
