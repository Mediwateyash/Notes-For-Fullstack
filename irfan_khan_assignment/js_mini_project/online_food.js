//4.Online food ordering system:
//Menu:
//1.Pizza:200
//2.Burger:100
//3.Fries:80
//User:
//1.Chooses item
//2.Enters quantity
//Program:
//1.Calculates bill
//2.Adds delivery charge if below Rs 300
//3.Shows final order summary.

const prompt = require("prompt-sync")();
let item = prompt("Enter item:")
let quantity = Number(prompt("Enter quantity:"))
let price;
if(item === "Pizza"){
    price = 200;
}
else if(item === "Burger"){
    price = 100;

}
else{
    price = 80;
}
let totalBill = price * quantity;
if(totalBill < 300){
    totalBill += 50;
}
console.log("Item: " , item);
console.log("Quantity: " , quantity);
console.log("Total Bill: " , totalBill);