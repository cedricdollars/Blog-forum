import { UserRepository } from "../../../domain/repositories/UserRepository";
import { User } from "../../../domain/entity/User";
import { UserDTO } from "../../../domain/dto/userDTO";

export class UpdateUser {

    constructor(private readonly repository: UserRepository) { }

    updateById(id:string, userdto:UserDTO): Promise<UserDTO> {
        return this.repository.updateUserById(id, userdto)
    }

    updateByEmail(email: string, userdto: UserDTO): Promise<UserDTO> {
        return this.repository.updateUserById(email, userdto)
    }

}
