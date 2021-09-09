import {BaseValueObject} from "./BaseValueObject";

type Props = {
    email: string
}
export class UserEmail extends BaseValueObject<Props> {

    constructor(value:Props) {
        super(value);
    }

    getEmail(): string {
        return this.props.email
    }
    isValidEmail(email:string):boolean {
        let pattern: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return !!email.match(pattern);
    }
}
