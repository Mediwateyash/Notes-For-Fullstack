// movie ticket booking

let prompt = require('prompt-sync')();
let movie = prompt("Enter movie name:-");
let age=Number(prompt("enter age:"))
let ticket = Number(prompt("Enter number of seat:-"));
let price;
let totalbill; 

if(age<12){
    price = 120
}
else if (age>60){
    price = 100
}
else{
    price = 180
}

totalbill=price*ticket
let food=prompt("enter foodcombo:")
if(food==="yes"){
    totalbill+=100*ticket;
}
else{
    console.log("no")
}

console.log("Enter movie",movie)
console.log("Enter tickets",ticket)
console.log("require food",food)
console.log("totalcost",totalbill)
