import { UserRepository } from "../repositories";
import { UserDTO } from "../dto/userDTO";
import { CreateUSerDTO } from "../dto/createUserDTO";
import {isValidName} from "../value_objects";

export class CreateUser {

    constructor(private readonly repository : UserRepository) {}

    async create({username, useremail, password}: CreateUSerDTO): Promise<UserDTO> {
        if(!isValidName(username.type)){
          throw new Error("Invalid name")
        }
        return  await this.repository.createUser({username, useremail, password});
    }
}
