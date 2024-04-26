// for each 
const todos = ["Order cat food", "Clean kitchen", "Buy food", "Do work", "Exercise"] ; 

console.log("For each loop") ;
todos.forEach(function (todo, index) {
    // print 
    console.log(`${index + 1}. ${todo}`) ;
})
// for loop
console.log("For loop") ;
for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`) ;
}

// while loop
console.log("While loop") ;
let count = 0 ;
while (count < todos.length) {
    console.log(`${count + 1}. ${todos[count]}`) ;
    count++ ;
}