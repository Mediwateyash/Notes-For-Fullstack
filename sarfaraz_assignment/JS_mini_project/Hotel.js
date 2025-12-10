// for Module not fond to type in terminal((npm i prompt-sync))


//2.Hotel room booking
//user enters:
//.room type(ac/non-ac)
//number of days
//food required?(yes/no)
//price:
//.Ac 2000/day
//.non ac 1200/day
//.food 500/day
// show full bill summary.


const prompt= require("prompt-sync")();
let type=prompt("enter room type: ")
let days=Number(prompt("enter days:"))
let food=prompt("Food required:")
let price
if(type==="AC"){
    price=2000
}
else{
    price=1200
}
let totalbill=price *days
if(food==="yes"){
    totalbill += 500* days
}
console.log("room type",type)
console.log("Number of days",days)
console.log("food required",food)
console.log("total bill",totalbill)