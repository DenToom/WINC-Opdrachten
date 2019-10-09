
const doubleArrayValues = function(arr) {
    console.log(arr.map( (item) => item * 2));
    }

doubleArrayValues([1, 2, 3]) 
// result should be [2, 4, 6]

/*   

// Eerste oplossing by Martyn den Toom
OPLOSSING

let numbers = [1,2,3];
let newArray = numbers.map(myFunction)

function myFunction(num) {
    return num * 2;
}

console.log(newArray)

// reference https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map2

*/


/*


// Oplossing by Niels

    function doubleArrayValues(array){
        let newArray = []
    array.forEach(number => {
            newArray.push(number * 2)
        })
    return newArray
}


// de onderstaande oplossingen zijn voor de pro's* 
// *die je aan het eind van vandaag ook gaat zijn. 

function doubleArrayValues(array){
    return array.map(number => {
            return number + number
    })
}

function doubleArrayValueShortHand(x) {
    return x.map(n => n+n)
}

console.log(doubleArrayValues([1, 2, 3]))
// [2, 4, 6])
console.log(doubleArrayValues([4, 1, 1, 1, 4]))
//[8, 2, 2, 2, 8]); 
console.log(doubleArrayValueShortHand([2, 2, 2, 2, 2, 2]))
// [4, 4, 4, 4, 4, 4]    

*/