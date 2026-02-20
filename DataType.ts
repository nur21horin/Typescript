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
  console.log(user.name)

}

//any keyword

const data:any="Nur"
console.log(data)