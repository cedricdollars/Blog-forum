import { UserRepository } from "../entity/port/UserRepository";
import { User } from "../entity/User";

export class UpdateUser {

    constructor(private readonly repository: UserRepository) { }

    updateById(id:string, user:User): Promise<User> {
        return this.repository.updateUserById(id, user)
    }

    updateByEmail(email: string, user: User): Promise<User> {
        return this.repository.updateUserById(email, user)
    }

}