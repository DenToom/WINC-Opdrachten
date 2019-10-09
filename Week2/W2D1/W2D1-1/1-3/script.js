


// 2e poging Martyn, resultaat = true

const isBiggerThan10 = function(array){
    console.log(array.some(i => i > 10));
}
isBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
// result should be true

console.log(isBiggerThan10([1, 4, 3, 6, 9, 7, 11])) 






// Oplossing Martyn echter resultaat is false

isBiggerThan9([1, 4, 3, 6, 9, 7, 11]) 
    // result should be true

    
    function isBiggerThan9(array){
        return array.some(number => {
            number > 10
            })
    }

console.log(isBiggerThan9([1, 4, 3, 6, 9, 7, 11])) 
