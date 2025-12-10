// School fee Payment system
// user enters:
// class (1 to 10)
// transport (yes/no)
// books required(yes/no)
// fee:
//. class 1-5 15000
//. class 6-10 20000
// transport +5000
// books +2000
//display final payable fees.

const prompt= require("prompt-sync")();
let classs=Number(prompt("enter class:"))
let transport=prompt("transport required:")
let books=prompt("books required:")
let fee
if(classs<=5){
    fee=15000
}
else{
    fee=20000
}
let totalfee=fee
if(transport==="yes"){
    totalfee+=5000
}
if(books==="yes"){
    totalfee+=2000
}
console.log("class:",classs)
console.log("transport:",transport)
console.log("books:",books)
console.log("total fee:",totalfee)