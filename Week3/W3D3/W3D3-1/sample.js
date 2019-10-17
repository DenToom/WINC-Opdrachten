// Rest and Spread Operator

// Rest Operator
// function sum(...numbers) {
//   //   console.log(numbers);

//   return numbers.reduce(function(prev, current) {
//     return prev + current;
//   });
// }

// console.log(sum(1, 2, 3, 4, 5)); //6

// arrow function notation
function sum(...numbers) {
  //   console.log(numbers);

  return numbers.reduce((pre, current) => pre + current);
}

console.log(sum(1, 2, 3)); //6

// Spread Operator
// function sum(x, y) {
//   // 1,2
//   //   console.log(numbers);

//   return x + y;
// }
// let nums = [1, 2];

// console.log(...nums);
// console.log(sum(...nums));
