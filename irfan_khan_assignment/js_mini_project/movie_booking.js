//Movie ticket booking system:
//Movie name:
//number of tickets:
//age
//ticket price:
//adult : 180
//child (<12): 120
//senior (>=60): 10
//at the end show:
//total cost
//food combo optional (yes/no)

const prompt = require ("prompt-sync")();
let movieName = prompt("Enter movie name: ");
let tickets = Number(prompt("Enter number of tickets: "));
let age = Number(prompt("Enter age: "));
let ticketPrice;
if (age <12){
    ticketPrice = 120;
}
else if(age >60){
    ticketPrice = 100;
}
else{
    ticketPrice = 180;
}
let totalCost = ticketPrice * tickets;
let foodCombo = prompt("Enter food combo (yes/no): ");
if (foodCombo === "yes"){
    totalCost += 500;
}
console.log("Movie Name: " , movieName);
console.log("Number of Tickets: " , tickets);
console.log("Age: " , age);
console.log("Ticket Price: " , ticketPrice);
console.log("Total Cost: " , totalCost);
if (foodCombo === "yes"){
    console.log("Food Combo: Yes");
}
else{
    console.log("Food Combo: No");
}
