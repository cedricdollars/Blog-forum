type Status = "success" | "fail"
export class Response<T> {
   private status: Status
    private error:string | T
    private value?: T

    constructor(status: Status, error?: T | string | null, value?: T) {
       this.status = status
        this.error = error as T
        this.value = value
    }
    public static ok<U>(value?: U):Response<U> {
       return new Response<U>("success", null, value)
    }
    public static fail<U>(error:string):Response<U> {
       return new Response<U>("fail", error)
    }
}