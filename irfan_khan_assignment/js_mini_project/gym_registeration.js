//5.Gym membership registration
//user enters:
//Name
//Age
//Duration(1 month,3 months,6 months)
//Price:
//1 month: Rs 500
//3 months: Rs 1200
//6 months: Rs 2000
//if age > 50: 10% discount
//print membership slip.

const prompt = require("prompt-sync")();
let name = prompt("Enter name:");
let age = Number(prompt("Enter age:"));
let duration = Number(prompt("Enter duration (1 month,3 months,6 months):"));
let price;
if(duration === 1){
    price = 500;
}
else if(duration === 3){
    price = 1200;
}
else{
    price = 2000;
}
let discount;
if(age >50){
    discount = price * 0.1;
}
else{
    discount = 0;
}
console.log("Name: " , name);
console.log("Age: " , age);
console.log("Duration: " , duration , " months");
console.log("Price: Rs " , price);
console.log("Discount: Rs " , discount);
