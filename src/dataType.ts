let bool: boolean = true
console.log(bool)

let number: number = 1
console.log(number)

let string: string = '1'
console.log(string)

let arr1: number[] = [1,2,3]
console.log(arr1)

let arr2: Array<string> = ['1','2']
console.log(arr2)

let x: [string, number] = ['123333',1]
console.log(x)
// console.log(x[0].substr(1))

enum Color {Red,Green,Blue=100}
let c : Color = Color.Blue // 通过key获取值
console.log(c)
let n: string = Color[100] // 通过值获取key
console.log(n)
 
