import {BaseValueObject} from "./BaseValueObject";

export type UserNameProps = {
    name:string
}

export class UserName extends BaseValueObject<UserNameProps> {


    getName():string {
        return this.props.name
    }
    private constructor(name:UserNameProps) {
        super(name);
    }
}
