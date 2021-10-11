import { ValueObject } from ".";
import {Hasher} from "../crypto/hasher";
import bcrypt, {hash} from "bcryptjs"

export interface UserPassword extends ValueObject<string> {
    type: "PASSWORD"
}
export function passwordOf(value:string): UserPassword {
    return {
        type: "PASSWORD",
        value
    }
}
 export async function hashPassword(value:string) {
    await hash(value, 10)
}