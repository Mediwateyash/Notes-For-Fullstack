
//petrol pump billing system:
//user enters:
// fuel type(diesel/petrol)
//litres taken
// rates:
//petrol 106/litre
//diesel 95/litre
//if litres>15 5 discount total
// print final fuel bill.

const prompt= require("prompt-sync")();
let fuel=prompt("enter fuel type:")
let litres=Number(prompt("enter litres:"))
let rates
if(fuel==="diesel"){
    price=95
}
else{
    price=106
}
let totalbill=litres*price
    if(litres>15){
        discount=totalbill*0.05
    }
    console.log("enter fuel type:",fuel)
    console.log("enter litres:",litres)
    console.log("discount:",discount)
console.log("final bill",totalbill)    