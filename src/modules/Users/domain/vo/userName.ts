import {UserInputError} from "../../../../shared/errors/user-input-error";


export class UserName {

    constructor(private readonly value:string) {
       this.value = value.trim()
        if(value === "") {
            throw new UserInputError("username is required!");
        }
      /*  if (!/^[-'0-9a-zÀ-ÿ]+$/.test(value)) {
            throw new UserInputError("user name should contain only letter");
        }*/
        this.value = value
    }

    equals(name: UserName):boolean {
        return JSON.stringify(this.value) === JSON.stringify(name.value)
    }
}

