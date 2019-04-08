function identiy<T>(arg: T): T {
    return arg;
}
let output = identiy<string>("myString");

 let identiy1 = <T>(arg: T) => {
    return arg
 }
console.log(identiy1('1'))

let identiy2 =  <T>(arg: T) => arg
console.log(identiy2<object>({a:1}))

interface GenericIdentityFn<T> {
    (arg: T): T;
}
let myIdentity: GenericIdentityFn<number> = identiy;
console.log(myIdentity(1))