const course:string = "Typescript";
console.log(course);

const name12:Number=124;
console.log(`name is ${name12}`);

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    introduce():string{
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.introduce();
