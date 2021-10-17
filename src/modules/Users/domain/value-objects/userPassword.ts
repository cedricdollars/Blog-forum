import * as bcrypt from 'bcryptjs'
import {UserInputError} from "../Errors";


export class UserPassword {
    private readonly value:string

    constructor(value:string) {
        if (value === "") {
            throw new UserInputError("Password must contains at least 3 characters");
        }
        this.value = value
    }
    public getValue():string {
        return this.value
    }
    static async hashPassword(password: string):Promise<string>{
       return await bcrypt.hash(password,10)
    }
    async comparePassword(password:string):Promise<boolean> {
        let hashed: string = this.value
        return await bcrypt.compare(password, hashed)
    }
}

