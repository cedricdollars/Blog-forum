import { UserRepository } from "../../../domain/repositories/UserRepository";
import { User } from "../../../domain/entity/User";
import { UserDTO } from "../../../domain/dto/userDTO";

export class FindUser {

    constructor(private readonly repository: UserRepository) {}

    findByEmail(email: string): Promise<User> {
        return this.repository.findUserByEmail(email);
    }

    findAll(): Promise<UserDTO[]> {
        return this.repository.findAllUser();
    }
}
