
//online food Ordering system
// Menu:
// 1. pizza 200
// 2. burger 100
// 3. Fries  80
// user:
// chooses item
// enters quantity
//program
//calculate bill
// adds delivery charges if below 300
//show final order summary

const prompt=require("prompt-sync")();
let item= prompt("enter itme:")
let quantity=Number(prompt("enter quantity:"))
let price
if (item==="pizza"){
    price=200
}
else if(item==="burger"){
     price=100
}
else{
    price=80
}
let totalbill=price*quantity
if(totalbill<300){
    totalbill+=50
}
console.log("item:",item)
console.log("quantity:",quantity)
console.log("totalbill:",totalbill)



