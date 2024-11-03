const myName = {
  fName: "a",
  fullName: { firstName: "Sunny", lastName: "Keshri" },
};

const bio = { ...myName };

myName.fullName.firstName = "Shiv";
bio.fName = "b";
myName.fName = "c";

console.log(myName); // { fullName: { firstName: "Shiv", lastName: "Keshri" } }

console.log(bio); // { fullName: { firstName: "Shiv", lastName: "Keshri" } }
