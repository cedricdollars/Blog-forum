import * as bcrypt from 'bcryptjs'
import {UserInputError} from "../../../../shared/errors/user-input-error";



export class UserPassword {
    private readonly value:string

     constructor(value: string) {
        if (value === "") {
            throw new UserInputError("Password must be filled")
        }
        else {
            UserPassword.hashPassword(value).then(r => console.log(r))
            this.value =  value
        }
   }
    public getValue():string {
        return this.value
    }

    private static async hashPassword(password: string):Promise<string>{
        return bcrypt.hash(password,10)
    }
    async comparePassword(password:string):Promise<boolean> {
        let hashed: string = this.value
        return  bcrypt.compare(password, hashed)
    }
}

