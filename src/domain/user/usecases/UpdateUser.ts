import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entity/User";
import { UserDTO } from "../dto/userDTO";

export class UpdateUser {

    constructor(private readonly repository: UserRepository) { }

    updateById(id:string, userdto:UserDTO): Promise<UserDTO> {
        return this.repository.updateUserById(id, userdto)
    }

    updateByEmail(email: string, userdto: UserDTO): Promise<UserDTO> {
        return this.repository.updateUserById(email, userdto)
    }

}
