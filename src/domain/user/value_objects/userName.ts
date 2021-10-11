import { ValueObject } from ".";

export interface UserName extends ValueObject<string> {
    type: "USERNAME"
}
export function nameOf(value:string): UserName {
    return {
        type: "USERNAME",
        value
    }
}
export function isValidName(username: string):boolean {
    if(!/^[a-zA-Z]+$/.test(username)){
        throw new Error("user name should contain only letter");
    }
    return true
}
