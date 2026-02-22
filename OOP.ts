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

//public,private, protected, readonly

//Encapsulation
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());