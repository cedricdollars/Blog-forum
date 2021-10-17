import {UserInputError} from "../Errors";

export class UserEmail {
   private readonly value: string

    constructor(value:string) {
        if(!UserEmail.isValidEmail(value)) {
            throw new UserInputError("Invalid email")
        }
        this.value = UserEmail.format(value);

    }
    private static format(email:string):string {
        return email.trim().toLocaleLowerCase()
    }
    private static isValidEmail(email:string) {
      const regEx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEx.test(email);
    }

}


