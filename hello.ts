function greet(name: string): string {
  return `Hello , ${name}`;
}
const message: string = greet("World");
console.log(message);

function ReturnGReeting(name: string): string {
  return `Hi , ${name}`;
}
const messageReturn: string = ReturnGReeting("Nur");

console.log(messageReturn);

function Welcome(value: string): string {
  return `Hey What about You ${value}`;
}
const welCome: string = Welcome("nur");
console.log(welCome);

function Country(value: string): string {
  return `What is Your Country ${value}`;
}
const CountryName: string = Country("Bangladesh");
console.log(CountryName);

function CountryIs(value: string): string {
  return `WHat is the positive ${value}`;
}
console.log(CountryIs("IsPropaganda"));

function Religious(value: string): string {
  return `WHat is your religious ${value}`;
}
const name: string = Religious("Islam");
console.log(name);

