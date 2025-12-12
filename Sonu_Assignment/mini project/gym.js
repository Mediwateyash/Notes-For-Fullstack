
// Gym Membership Registration
// user enters:
// Name 
// Age
// Duration(1 month/3 months/6 months)

// price chart:
// 1 month 500
// 3 months 1200
// 6 months 2000
// if age>50 give 10% discount
// print membership sip.

const prompt= require("prompt-sync")();
let name=prompt("enter name:")
let age=Number(prompt("enter age:"))
let Duration=Number(prompt("enter duration:"))
let price
if (Duration===1 ){
    price=500
}
else if(Duration===3){
    price=1200
}
else{
    price=2000
}
let totalbill=price
let discount
if(age>50){
    discount=totalbill*0.10
}
else{
    discount=0
}
console.log("enter name:",name)
console.log("enter age:",age)
console.log("enter duration:",Duration)
console.log("discount:",discount)
console.log("final bill",totalbill)
