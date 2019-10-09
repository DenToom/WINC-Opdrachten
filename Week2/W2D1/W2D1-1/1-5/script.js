console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))


// const duplication = [1, 4, 3, 6, 9, 7, 11]

function tenfold(array){
  return array.map(number => {
   return number * 10
  })
}