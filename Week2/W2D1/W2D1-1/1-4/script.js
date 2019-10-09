
italyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be false


function italyInTheGreat7(array){
    return array.includes('Italy')
        
}

/*
function italyInTheGreat7(array){
    return array.includes(country => {
		country === 'Italy'
        })  
        
}
*/

console.log(italyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']))


// Waarom is resultaat 'false', 'Italy'staat in de array en dus zou ik denken dat deze true zou moeten zijn. 