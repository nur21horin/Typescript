console.log("Welcome in OOP")

console.log("Four pillars Encapsulation, Abstraction, Inheritance, Polymorphism")

//class
class Person{
    nams:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `Thank You ${this.name}`;
    }
}

//Object

const p1=new Person("Nur",23);
console.log(p1.greet())