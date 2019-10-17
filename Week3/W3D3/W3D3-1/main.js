// Functie 1

// function add(number) {
//   console.log(1 + 2 + 3);
// }
// add();

function add(...restop) {
  return restop.reduce((num1, appel) => {
    return num1 + appel;
  });
}
console.log(add(1, 2, 3, 10, 20));

// Oplossing Winc
// function optellen(...arg) {
//   return arg.reduce((acc, item) => {
//     return acc + item;
//   });
// }

// console.log(optellen(1, 2, 3, 4, 5, 6));
// // verwachte uitkomst: 21
// ==========================================
// Functie 2

function add(w, x, y, z) {
  return w + x + y + z;
}
let nums = [1, 2, 3, 4];

console.log(add(...nums));

// Oplossing Winc
// function optellen(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }

//   const cijfers = [1, 2, 3];

//   console.log(optellen(...cijfers));
// verwachte uitkomst: 6
