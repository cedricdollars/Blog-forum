import { ValueObject } from ".";

export interface UserPassword extends ValueObject<string> {
    type: "PASSWORD"
}
export function passwordOf(value:string): UserPassword {
    return {
        type: "PASSWORD",
        value
    }
}