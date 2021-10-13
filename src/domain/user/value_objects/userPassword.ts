import {hash} from "bcryptjs"
import {UserPasswordError} from "../common/Errors/user-password-error";


export class UserPassword {
    private readonly value:string
    private minLength: number

    constructor(value:string) {
        this.value = this.computePassword(value)
    }
    private computePassword(password:string):string {
        if(this.minLength < 3 || this.value === "") {
            throw new UserPasswordError("Password must be contain at least 3 characters");
        }
        return password
    }
    static passwordOf(value:string):UserPassword {
        return new UserPassword(value)
    }
    static hashPassword(password:UserPassword):Promise<string> {
        return hash(password.value, 10)
    }
}

