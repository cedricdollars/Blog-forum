class UserName {
    private static minLength : number = 2
    private static maxLength: number = 20
    constructor(private value:string) {}

    getValue():string {
        return this.value
    }

}
