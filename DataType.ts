//Two type
//EXplicit Type and Type inference

//Explicit
const name: string = "Nur Mohammod";
const score: number = 300;
const isLoading: boolean = true;
const Exam: number[] = [200, 344, 50, 30];
console.log(Exam);
Exam[2] = 399;
console.log(Exam);

//Type inference
const name2 = "Nur";
const score2 = 300;

//Object Type
const user = {
  name: "Nur",
  age: 30,
  isAdmin: true,
};
console.log(user);
user.name = "AagdumBaagDum";
console.log(user);

function isUserName(name: string): boolean {
  return name === user.name;
}
if (isUserName("AaddumBaagDum")) {
  console.log("Yes");
} else {
  console.log("No");
  console.log(user.name);
}

//Some Special type
//any keyword

let data: any = "Nur";
console.log(data);
data = 399;
console.log(data);
data = JSON.parse('{ "name": "Anur", "age": 78 }');
console.log(data);

const response: any = JSON.parse('{"name":"Nur","age":22}');

console.log(response);

//Math round

//if deciaml >=0.5 round up

console.log(Math.round(3.8));

//if eciaml <=0.5 round down
console.log(Math.round(3.3));

//MAth.floor
console.log(Math.floor(4.3)); //=>4
console.log(Math.ceil(4.3)); //=>5

//Math.trunc() remove deciaml
console.log(Math.trunc(7.8));

//unknown
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
//never

function throwError(message: string): never {
  throw new Error(message);
}
// throwError("Nur");

let nameNur: string = "NUR ";
console.log(nameNur);
