export interface ValueObject<T> {
    type: string
    value: T
}
export function isEqualTo<T, V extends ValueObject<T>>(v1: V, v2: V): boolean {
    return v1.value === v2.value
}



