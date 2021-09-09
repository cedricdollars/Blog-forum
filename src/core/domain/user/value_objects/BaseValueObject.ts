export interface ValueObjectProps {
    [index: string]:any
}
export abstract class BaseValueObject<T extends ValueObjectProps> {
   readonly props: T

    protected constructor(props: T) {
       this.props = {
           ...props
       }
    }

    equals(object?: BaseValueObject<T>) {
        if(object === null || this.props === undefined) return false
        return object?.props === this.props
    }

}
