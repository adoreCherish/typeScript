class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter('world')
console.log(greeter.greet())

class Animal {
    private animalName: string;
    constructor(name: string){
        this.animalName = name;
    }
    move(move: number = 0) {
        console.log(`${this.animalName}向前移动了${move}米`)
    }
}
class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
    move( move = 0 ){
        console.log('moving.....')
        super.move( move );
    }
    bark(){
        console.log('Woof! Woof!');
    }
}
let dog = new Dog('pounds');
// dog.move(40);
dog.move(10)