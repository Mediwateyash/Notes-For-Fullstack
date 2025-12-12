
// electricity billing system
// user inputs units used.
// rates:
// first 100 units Rs 5
// next 100 units Rs 7
// above 200 -> Rs 10
// add 5% tax.
// print final bill

const prompt= require("prompt-sync")();
let units=Number(prompt("enter units:"))
let price
if(units<=100){
    price=5
}
else if(units<=200){
    price=7
}
else{
    price=10
}
let totalbill=price * units
let tax=totalbill*0.05
let finalbill=totalbill+tax
console.log("units:",units)
console.log("price:",price)
console.log("total bill:",totalbill)
console.log("tax:",tax)
console.log("final bill:",finalbill)
