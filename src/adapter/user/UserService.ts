import { UserRepository } from "domain/user/entity/port/UserRepository";
import { User } from "domain/user/entity/User";

export class UserService implements UserRepository {

    createUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

    findUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    findAllUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    updateUserById(id: string, user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

    updateUserByEmail(email: string, user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}