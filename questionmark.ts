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
    city: "Dhaka",
    road: "Mirpur49",
  },
};

const 
