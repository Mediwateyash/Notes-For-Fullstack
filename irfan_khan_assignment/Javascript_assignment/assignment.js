//variables and datatypes
//1.Store the price of a product and its discount .calculate and print the final price.

let price = 200;
let discount = 10;
let finalPrice = price - discount;
console.log(finalPrice); //190

//2.Store your city in a variable and print its datatype.

let city = "Mumbai";
console.log(typeof city); //string

//3.Create a boolean variable isLoggedIn and print a message based on its value.

let isLoggedIn = false;
if (isLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in"); //User is not logged in
} 

//Operators
//1.Take two numbers and check which is greater using comparison operators.

let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log("num1 is greater than ");
} else {
    console.log("num2 is greater than "); //num2 is greater than
}

//2.write a program that increase a number by 5 using a assignment operator.

let num = 15;
num += 5;
console.log(num); //20

//3.Find the power of a number using exponent operator(**).

let a = 3;
let b = 4;
let result = a ** b; //3*3*3*3
console.log(result);

//Conditional Statement
//1.Write a program to check whether a number us divisible by 3 or not.

let x = 9;
let y = 3;
if (x / y){
    console.log("The number is divisible by 3");//The number is divisible by 3
}
else{
    console.log("The number is not divisible by 3"); 
}

//2.write a program to check whether a year is leap year or not.

let year = 2000;
if(year % 4 === 0){
    console.log("The year is leap year");//The year is leap year
}
else{
    console.log("The year is not leap year");
}

//3.write a program to assign grades:
//Marks >= 90 = A
//Marks >= 75 = B
//Marks >= 60 = C
//Marks < 60 = Fail

let marks = 80;
if(marks >= 90){
    console.log("Grade A"); //Grade A
}
else if(marks >= 75){
    console.log("Grade B"); //Grade B
}
else if(marks >= 60){
    console.log("Grade C"); //Grade C
}
else{
    console.log("Fail"); //Fail
}

//4.write a program to check whether a temprature is:
// Cold (<20)
// Warm (20-30)
// Hot (>30)

let temprature = 35;
if(temprature < 20){
    console.log("Cold"); //Cold
}
else if(temprature >= 20 && temprature <= 30){ //compare 20 and 30
    console.log("Warm"); //Warm
}
else{
    console.log("Hot"); //Hot
}

//4.switch case statement
//1.create a menu-driven program using switch case statement:
// 1.Tea
// 2.Coffee
// 3.Juice
// 4.Water:

let choice = "Milk";
switch(choice){
    case"Tea":
        console.log("Tea"); //Tea
        break;
    case"Coffee":
        console.log("Coffee"); //Coffee
        break;
    case"Juice":
        console.log("Juice"); //Juice
        break;
    case"Water":
        console.log("Water"); //Water
        break;
    default:
        console.log("Invalid choice"); //Invalid choice
}

//Using switch,print the number of days in a week.

let days = 6;
switch(days){
    case 1:
        console.log("Sunday"); //Sunday
        break;
    case 2:
        console.log("Monday"); //Monday
        break;
    case 3:
        console.log("Tuesday"); //Tuesday
        break;
    case 4:
        console.log("Wednesday"); //Wednesday
        break;
    case 5:
        console.log("Thursday"); //Thursday
        break;
    case 6:
        console.log("Friday"); //Friday
        break;
    case 7:
        console.log("Saturday"); //Saturday
        break;
    default:
        console.log("Invalid day"); //Invalid day
}

//Strings programs.
//1.Take a string "programming" and print the first four later.

let string = "programming";
console.log(string.slice(0,4)); //prog

//2.Convert "MobilePhone" into all lowercase letters.

let str = "MobilePhone";
console.log(str.toLowerCase()); //mobilephone

//3.Replace "slow" with "fast" in:
// "this internet is slow".

let net = "this internet is fast";
console.log(net.replace("fast","slow")); //this internet is slow

//4.check if the word "shop" exists in "Online shopping is easy".

let str1 = "Online shopping is easy";
console.log(str1.indexOf("shop")); //7

//5.Reverse the string "developer" using methods.

let str2 = "developer";
console.log(str2.split("").reverse().join("")); //repelved

//Array programs.
//1.Create an array of 6 subjects names and print each subject.

let subject = ["Maths","Physics","Biology","English","History","Chemistry"];
console.log(subject); //[ 'Maths', 'Physics', 'Biology', 'English', 'History', 'Chemistry' ]

//2.insert "sunday" at the start of a days array.

let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day.unshift("Sunday"); //Sunday
console.log(day);

//3.remove the last two elements from the an array using splice().

let arr = ["Tea","Coffee","Milk","Water","Juice"];
arr.splice(3,4);
console.log(arr); //[ 'Tea', 'Coffee', 'Milk' ]

//4.find the index of "blue" in a colors array.

let colors = ["Green","Pink","Blue","Yellow"];
console.log(colors.indexOf("Blue")); //2

//5.Merge a fruits array and vegetables array.

let fruits = ["Apple","Banana","Orange","Maango"];
let vegetables = ["Onion","Potato","Tomato","Brinjal"];
let results = fruits.concat(vegetables); //merge both arrays
console.log(results)

//6.Sort students marks in ascending order.

let arr1 = [60,50,70,80,65,85];
console.log(arr1.sort());//[ 50, 60, 65, 70, 80, 85 ]

//7.Reverse a city name array.

let city1 = ["Mumbai","Delhi","Chennai","Kolkata"];
console.log(city1.reverse()); //['Kolkata', 'Chennai', 'Delhi', 'Mumbai']