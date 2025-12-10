//6.Petrol pump billing system:
//User enters:
//Fuel type(petrol/diesel)
//litres taken
//Rates:
//1.Petrol: Rs 106/litre
//2.Diesel: Rs 95/litre
//if litres > 15: 5% discount
//print final fuel bill.

const prompt = require("prompt-sync")();
let fuelType = prompt("Enter fuel type (petrol/diesel): ");
let litres = Number(prompt("Enter litres: "));
let rate;
if(fuelType === "petrol"){
    rate = 106;
}
else{
    rate = 95;
}
let discount;
if(litres > 15){
    discount = rate * 0.05;
}
let finalBill = rate * litres - discount;
console.log("Fuel Type: " , fuelType);
console.log("Litres: " , litres);
console.log("Rate: " , rate);
console.log("Discount: " , discount);
console.log("Final Bill: " , finalBill);