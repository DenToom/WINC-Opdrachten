// console.log(duplication([1, 4, 3, 6, 9, 7, 11]));
// result should be [2, 8, 6, 12, 18, 14, 22]

const duplication = [1, 4, 3, 6, 9, 7, 11]

const duplicationNumbers = duplication.map((duplication) => {
      return duplication * 2
})
console.log(duplicationNumbers)

/*
function duplication(array) {
  return array
}

*/

/*

// In een array met integers. Schrijf een JavaScript functie die elke integer verdubbeld.

function duplication(array) {
  return array.map(number => {
    number * 10;
  });
}


*/