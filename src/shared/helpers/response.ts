type Status = "success" | "fail"
export class Response<T> {
   private status: Status
    private error?:T | string
    private value?: T

    constructor(status: Status, error?: T | string, value?: T) {
       this.status = status
        this.error = error
        this.value = value
    }
    private static ok<U>(value?: U):Response<U> {
       return new Response<U>("success",null, value)
    }
    private static fail<U>(error:string):Response<U> {
       return new Response<U>("fail", error)
    }
}