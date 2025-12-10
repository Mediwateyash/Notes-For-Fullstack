//prompt module is used to take input from the user (for installation use npm install prompt-sync)

//2.Hotel room booking system:
//user enters:
//room type(AC/non-AC)
//number of days
//food required(yes/no)
//Price:
//AC room: Rs 2000/day
//non-AC room: Rs 1200/day
//Food: Rs 500/day
//show full summary bill.

const prompt = require('prompt-sync')();
let roomType = prompt("Enter room type (AC/non-AC): ");
let noOfDays = Number(prompt("Enter number of days: "))
let foodRequired = prompt("Enter food required (yes/no): ");
let price;
if (roomType === "AC") {
    price = 2000;
} else {
    price = 1200;
}
let totalBill = price * noOfDays;
if (foodRequired === "yes") {
    totalBill += 500 * noOfDays;
}
console.log("Room Type: " , roomType);
console.log("Number of Days: " , noOfDays);
console.log("Food Required: " , foodRequired);
console.log("Total Bill: " , totalBill);