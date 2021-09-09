import { UserRepository } from "core/domain/user/port/UserRepository";
import { User } from "core/domain/user/entity/User";


export class InMemoryDatabase implements UserRepository {

    private readonly data: Array<User> = [];

    async createUser(user: User): Promise<void> {
        this.data.push(user);
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
