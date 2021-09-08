class UserEmail {
    constructor(private value:string) {}

    getValue():string {
        return this.value
    }

    private static format(email:string):string {
        return email.trim().toLocaleLowerCase()
    }
}
