

let students = ['piet','klaas','rita','marjan'];

function logName( name) {
    console.log(name);
}

function forEach(myArray, myFunction) {
    for (let i= 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}
forEach(students, logName)

/*
forEach(students, function(student) {
    console.log(student);
})

*/

/*

// forEach is a built-in function on arrays
students.forEach(function(name) {
    console.log(name);
})

*/

/*

// also works same output, only full written
students.forEach(function logName(name) {
    console.log(name);
}
*/

/*
// function or method on students, because students is an array. This is on all arrays. is called forEach.
students.forEach(logName)
*/

/*
for (let i = 0; i < students.length; i++) {
    logName(students[i]);
}
*/

logName(students[0])

/*

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item)
});

*/