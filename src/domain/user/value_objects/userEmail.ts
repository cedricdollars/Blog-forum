export class UserEmail {
    value: string

    constructor(value:string) {
        this.value = value;
    }
    static emailOf(value:string): UserEmail {
        return new UserEmail(value)
}

}


