//console.log(below100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]

const cijfers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

const filteredNumbers = cijfers.filter((cijfers) => {
    return cijfers <= 100
})

console.log(filteredNumbers)

/// In een array met integers. Schrijf een JavaScript functie die alle integers retourneert onder de 100. 


//Oplossing Niels Winc

/*
const cijfers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

console.log(cijfers.filter((number) => {
		return number < 100
        }))
        
*/        