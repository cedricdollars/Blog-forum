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

