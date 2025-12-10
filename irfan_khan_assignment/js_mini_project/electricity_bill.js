//8.Elecricity billing system:
//User inputs units needs.
//Rates:
//first 100 units: Rs 5/unit
//next 100 units: Rs 7/unit
//Above 200: Rs 10/unit
//Add 5% tax.
//print final bill.

const prompt = require("prompt-sync")();
let units = Number(prompt("Enter units: "));
let rate;
if (units <= 100) {
    rate = 5;
} else if (units <= 200) {
    rate = 7;
} else {
    rate = 10;
}
let totalBill = units * rate;
let tax = totalBill * 0.05;
let finalBill = totalBill + tax;
console.log("Units: " , units);
console.log("Rate: " , rate);
console.log("Total Bill: " , totalBill);
console.log("Tax: " , tax);
console.log("Final Bill: " , finalBill);