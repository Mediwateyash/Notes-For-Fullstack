// hotel room booking
const prompt = require('prompt-sync')();
let roomtype = prompt("Enter room type (Ac/non Ac):-");
let days = Number (prompt("Enter number of days:-"));
let food = prompt("Enter food required :-");
let price;
let totalbill;

if(roomtype === "Ac"){
    price = 2000;
}else{
    price = 1200;
}
totalbill = price*days;
if (food ==="yes"){
    totalbill+=500*days;
}
console.log("roomtype",roomtype)
console.log("Enter days",days)
console.log("required food",food)
console.log("totalbill",totalbill)




