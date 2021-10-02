import { ValueObject } from ".";

export interface UserEmail extends ValueObject<string> {
    type:"USERNAME"
}
export function emailOf(value:string): UserEmail {
    return { type: "USERNAME", value}
}


