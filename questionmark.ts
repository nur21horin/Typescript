const age: number = 28;

if (age >= 18) {
  console.log("Yes");
} else {
  console.log("No");
}

//Ternary operator

const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

//Nullish Coalesnace Operator= ??
//Null and undefined

// const isAuthenticatedUser = null;
// const userName = isAuthenticatedUser ?? "Guest";
// console.log(userName);

const isAuthenticatedUser1 = " ";
const userName1 = isAuthenticatedUser1 ?? "Guest";
const username2 = isAuthenticatedUser1 ? isAuthenticatedUser1 : "Nur";
console.log({ userName1 }, { username2 });

type manush = {
  name: string;
  age: number;
  address: {
    city: "No City";
    road: "No Road";
    home?: "";
  };
};

const manush1: manush = {
  name: "Manush",
  age: 100,
  address: {
    city: "No City",
    road: "No Road",
  },
};

const home = manush1?.address?.home ?? "No home";
console.log(home);

type manush2 = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    home?: string;
  };
};

const manush3: manush2 = {
  name: "Nur",
  age: 29,
  address: {
    city: "Pabna",
    road: "sahapur",
  },
};

const nur = manush3.name;
console.log(nur);

// function throwEror(messsage: string): never {
//   throw new Error(messsage);
// }

// console.log(throwEror("Nur Eroro khaice"));
