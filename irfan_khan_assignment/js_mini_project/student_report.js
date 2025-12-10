//1.Student report card system.
//Student name:
//marks of 5 subjects:
//Calculate:
//total marks
//percentage
//grade(A,B,C,Fail using if else)
//Print the full report card.

const prompt = require('prompt-sync')();
let studentName = prompt("Enter student name: ");
let marks1 = Number(prompt("Enter marks of subject 1: "));
let marks2 = Number(prompt("Enter marks of subject 2: "));
let marks3 = Number(prompt("Enter marks of subject 3: "));
let marks4 = Number(prompt("Enter marks of subject 4: "));
let marks5 = Number(prompt("Enter marks of subject 5: "));
let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
let percentage = (totalMarks / 500) * 100;
let grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 75) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}
console.log("Student Name: " + studentName);
console.log("Marks of Subject 1: " , marks1);
console.log("Marks of Subject 2: " , marks2);
console.log("Marks of Subject 3: " , marks3);
console.log("Marks of Subject 4: " , marks4);
console.log("Marks of Subject 5: " , marks5);
console.log("Total Marks: " , totalMarks);
console.log("Percentage: " , percentage , "%");
console.log("Grade: " , grade);