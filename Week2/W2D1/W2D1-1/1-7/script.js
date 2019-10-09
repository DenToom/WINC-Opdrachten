
//In een array met integers. Schrijf een JavaScript functie die alle integers bij elkaar optelt
// en enkel het totaal van de som retourneert. 

const cijfers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

console.log(cijfers.reduce((acc, number) => {
		return acc + number
		}))


// console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118