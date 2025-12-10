//7.School fee payment system:
//User enters:
//Class(1 to 10)
//Transport fee(yes/no)
//Books required(yes/no)
//Fee:
//Class 1 to 5: Rs 15000
//Class 6 to 10: Rs 20000
//Transport fee: Rs 5000
//Books: Rs 2000
//display final payable fees.

const prompt = require("prompt-sync")();
let classNumber = Number(prompt("Enter class number (1 to 10): "));
let transportFee = prompt("Enter transport fee (yes/no): ");
let booksRequired = prompt("Enter books required (yes/no): ");
let fee;
if (classNumber <= 5) {
    fee = 15000;
} else {
    fee = 20000;
}
if (transportFee === "yes") {
    fee += 5000;
}
if (booksRequired === "yes") {
    fee += 2000;
}
console.log("Class Number: " , classNumber);
console.log("Transport Fee: " , transportFee);
console.log("Books Required: " , booksRequired);
console.log("Fee: " , fee);