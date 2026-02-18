console.log("Nur");

function identity(value: string): string {
  return value;
}

console.log(identity("Shofiq Harce"));

function identity(value: number): number {
  return value;
}
console.log(identity(39 + 3));

function identity(value: number, value1: number): number {
  return value + value1;
}

console.log(identity(390, 383));

//generic

function identity<T>(value: T) {
  return value;
}

console.log(identity("NUr Namaj porche"))
console.log(identity(89-9))

function name<k>(value:k){
    return value;
}
console.log(name("Nur"))

function name<u>(name:u,name1:u){
    return name,name1;
}
console.log("Nur",10)