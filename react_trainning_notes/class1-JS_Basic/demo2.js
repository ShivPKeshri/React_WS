// function doSomething() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("outside: " + i);
// }

// doSomething();

var a = 100;
console.log(a); // 100
{
  let a = 200;
  console.log(a); // 200
}
console.log(a); // 100
