import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entity/User";
import { UserDTO } from "../dto/userDTO";

export class FindUser {

    constructor(private readonly repository: UserRepository) {}

    findByEmail(email: string): Promise<User> {
        return this.repository.findUserByEmail(email);
    }

    findAll(): Promise<UserDTO[]> {
        return this.repository.findAllUser();
    }
}
