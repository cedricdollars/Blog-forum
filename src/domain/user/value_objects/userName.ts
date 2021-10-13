import {UserNameError} from "../common/Errors/user-name-error";

export class UserName {
    private readonly value:string

    constructor(value:string) {
        this.value = this.evaluateName(value)
    }

    private evaluateName(value: string):string {
        value = value.trim();
        if(value === "") {
            throw new UserNameError("username is required!");
        }return value
    }
     static userNameOf(name:string):UserName {
        return new UserName(name);
    }
    public isValidName():boolean {
        if(!/^[a-zA-Z]+$/.test(this.value)){
            throw new UserNameError("user name should contain only letter");
        }
        return true
    }
}

