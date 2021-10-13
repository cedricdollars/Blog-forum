import { UserRepository } from "../repositories";
import { UserDTO } from "../dto/userDTO";
import { CreateUSerDTO } from "../dto/createUserDTO";


export class CreateUser {

    constructor(private readonly repository : UserRepository) {}

    async create({username, useremail, password}: CreateUSerDTO): Promise<UserDTO> {
        return  await this.repository.createUser({username, useremail, password});
    }
}
