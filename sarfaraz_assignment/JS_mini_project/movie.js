//3. Movie ticket booking:
//user enters:
//.movie name
//number of tickets
//age
//ticket price:
//.adult 180
//.child (<12) 120
//.senior(>60) 100
// At the end show
//.total cost
//.food combo optional(yes/no)

const prompt = require("prompt-sync")();
let movie=prompt("enter a movie:")
let tickets=Number(prompt("enter number of tickets:"))
let age=Number(prompt("enter age:"))
let price
if(age<12){
    price=120
}
else if(age>60){
     price=100
}
else{
    price=180
}
let totalcost=tickets*price
let food=prompt("food required:")
if(food==="yes"){
    totalcost += 500*tickets
}
console.log("movie:",movie)
console.log("tickets:",tickets)
console.log("age:",age)
console.log("total cost:",totalcost)
if(food==="yes"){
    console.log("food required")
}
else{
    console.log("food not required")
}
