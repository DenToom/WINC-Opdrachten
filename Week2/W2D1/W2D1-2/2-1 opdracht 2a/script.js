
// 2a Schrijf een JavaScript functie om te checken of de`input` een array is of niet.

console.log(isArray('Winc Winc, nudge nudge')); // false
console.log(isArray([1, 2, 4, 0])); // true

// console.log(isArray('Winc Winc, nudge nudge')); // false
// console.log(isArray([1, 2, 4, 0])); // true

function isArray(data_input) {
    return Array.isArray(data_input)   
   };





// Oplossing Winc

/*

function isArray(input) {
    return Array.isArray(input)   
   };

console.log(isArray('Winc Winc, nudge nudge')); // false
console.log(isArray([1, 2, 4, 0])); // true

*/