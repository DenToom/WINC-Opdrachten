

const superheroes =[
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"},
]
// {name: "Spiderman", alter_ego: "Peter Parker"}

console.log(superheroes.find((superhero)=>{return superhero.name === "Spiderman"}))

/*
// Oplossing Sander - 

const superheroes = function(arr) {
    return arr.find( (item) => {
        return item.name == "Spiderman";
    });
}

console.log(superheroes([{name: "Batman", alter_ego: "Bruce Wayne"}, {name: "Superman", alter_ego: "Clark Kent"}, {name: "Spiderman", alter_ego: "Peter Parker"},])) 
// {name: "Spiderman", alter_ego: "Peter Parker"}
*/
