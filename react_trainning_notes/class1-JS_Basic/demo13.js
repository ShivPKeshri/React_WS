let str1 = "hello";
let str2 = "World";

let firstName = "John";
let lastName = "Doe";

//let fullName = firstName + ' ' + lastName;

// using template literals
// 1. wrapping string with backticks
// 2. using ${} to insert expression
let fullName = `${firstName} ${lastName}`; // result: "John Doe"

console.log(fullName);

let message = "Hello " + "World \n" + "from \n" + "string";

console.log(message);

let msg = `
Hello
world
from 
string
`;

console.log(msg);
