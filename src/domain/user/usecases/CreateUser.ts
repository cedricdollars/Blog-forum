import { UserRepository } from "../entity/port/UserRepository";
import { User } from "../entity/User";

export class CreateUser {

    constructor(private readonly repository : UserRepository) {}

    create(user: User): Promise<void> {
        return this.repository.createUser(user);
    }
}