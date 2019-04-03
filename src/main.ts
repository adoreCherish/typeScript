import { sayHello } from "./greeter";
import './dataType';
// function showHello(divName: string, name: string) {
//     console.log(divName, name)
//     const elt = document.getElementById(divName);
//     // console.log(elt)
//     elt.innerText = sayHello(name);
// }

// showHello("greeting", "TypeScript");

class Person {
    name: string;
    constructor( message: string ) {
        this.name = message
    }
    show() {
        // return `${this.name},`
    }
}

class Student extends Person{
    age: string;
    constructor(name: string, age: string) {
        super(name)
        this.age = age;
    }
    show(){
        return `${this.name},这个学生${this.age}岁`
    }
}

let s = new Student('wyq','12');
console.log(s.show())


