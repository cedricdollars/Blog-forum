import { UserRepository } from "../entity/port/UserRepository";
import { User } from "../entity/User";

export class FindUser {

    constructor(private readonly repository: UserRepository) {}

    findByEmail(email: string): Promise<User> {
        return this.repository.findUserByEmail(email);
    }

    findAll(): Promise<User[]> {
        return this.repository.findAllUser();
    }
}