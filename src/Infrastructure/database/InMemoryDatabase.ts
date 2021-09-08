import { UserRepository } from "domain/user/entity/port/UserRepository";
import { User } from "domain/user/entity/User";
import { resolve } from "path/posix";

export class InMemoryDatabase implements UserRepository {

    private readonly database: Array<User> = [];

    createUser(user: User): Promise<void> {
        this.database.push(user);
        return new Promise((resolve, reject)=> {
             resolve();
        });
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