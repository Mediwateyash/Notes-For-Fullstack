//1. variable and data types
//1.store the price of product and its discount. calculate and print the final price.
let price=100
let discount=10
let finalprice=price-discount
console.log(finalprice)  //90

//2.store your city in variable and print its data type.
let city="mumbai"
console.log(typeof city)  //string

//3.create a boolean variable isLoggedIn and print a message based on its value

let isLoggedIn=true
if(isLoggedIn){
    console.log("user is logged in")
}
else{
    console.log("user is not logged in")
}                                   //user is logged in

//2. Operators
//4. Take two numbers and check which is greater using camparesion operators
let num1=10
let num2=20
if(num1>num2){
    console.log("num1 is greater")
}
else{
    console.log("num2 is greater")
}                //num2 is greater


//5.write a that increase a number by 5 using assignmen toperators.
let num=10
num += 5
console.log(num)   //15


//6. find the power of a number using the exponent operator(**).
let a=5
let b=3
let result=a**3
console.log(result)  //125


// 3.Condational statements
// 7. write a program to check whether a number is divisible by 3 or not.
let m=3
let n=24
if(m/n)
{
    console.log("number is divisible by 3")
}
else{
    console.log("not divisible by 3")
}   //number is divisible by 3

//8. write a program to check whether a year is a leap years or not.
let year =2025
if (year % 4===0){
    console.log("is leap year")
}
else{
    console.log("is not leap year")
}  //is not leap year


//9.write a program to assign grades.
//marks>=90 A  
//>=75 B
//>=60 C
//<60 fail
let marks =90
if(marks>=90){
    console.log("A grade")
}
 else if(marks>=75){
    console.log("B grade")
}
else if(marks>=60){
    console.log("C grade")
}
else{
    console.log("Fail")
}   //A grade


//10.write a program to check whether a temperature is :
//cold (<20)
//warm(20-30)
//hot(>30)
let temprature =25
if(temprature<20){
    console.log("cold")
}
else if (temprature>=20 && temprature<=30){
    console.log("warm")
}
else{
    console.log("hot")
}  //warm


//4. switch statement
//11.create a menu-driven program using switch:
//1 tea
//2 coffe
// 3 juice
//4 water
let breakfast="milk"
switch(breakfast){
    case "tea":
    console.log("tea")
    break;
    case "juice":
        console.log("juice")
        break;
         case "water":
        console.log("water")
        break;
        default:
            console.log("invalid breakfast")
} //invalid breakfast


//12.using switch print the number of days in a week(1-12)

let days = "tuesday"

switch(days){
    case "sunday" :
        console.log("today is ",days)
        break;

    case "monday" :
        console.log("today is ",days)
        break;

    case "tuesday" :
        console.log("today is ",days)
        break;

    case "wednesday" :
        console.log("today is ",days)
        break;

    case "thursday" :
        console.log("today is ",days)
        break;

    case "friday" :    
        console.log("today is ",days)
        break;

    case "saturday" :
        console.log("today is ",days)
        break;
    default:
        console.log("invalid day")
}//today is  tuesday


// string programs
//13. take a string "programing" and print the first 4 characters.
let str="programing"
console.log(str.slice(0,4)) //prog

//14. convert "mobilephone" into all lowercase letters.
let str1="Mobilephone"
console.log(str1.toLowerCase())   //mobilephone


//15.Replace"slow "Fast "in: " this internet is slow"
let str2="this internet is slow"
console.log(str2.replace("fast","slow"))//this internet is slow


//16. check if the wod "shop" exists in "Online  shopping is easy"


let str3="online shopping is easy"
console.log(str3.indexOf("shop"))  //7


//17. Reverse the string "Devloper" using methods.
let str4="developer"
console.log(str4.split("").reverse("").join(""))  //repoleved


//6.Array programs(New data)
//18. create an Array of 6 subject names and print each subject.
let arr=["maths","science","history","english","hindi","marathi"]
console.log(arr)  //[ 'maths', 'science', 'history', 'english', 'hindi', 'marathi' ]

// 19. insert "sunday" at the start of days array.
let arr1=["monday","tuesday","wednesday","thursday","friday","saturday"]
arr1.unshift("sunday")
console.log(arr1)   //[ 'sunday','monday','tuesday','wednesday','thursday','friday', 'saturday']

//20. Remove the last two elements from an array using splice().
let arr2=["sarfaraz","shaheen","irfan","madheeha"]
arr2.splice(2,3)
console.log(arr2) //[ 'sarfaraz', 'shaheen' ]

//21. find the indexof "blue" in a colors array.
let arr3=["red","green","blue","brown","black"]
console.log(arr3.indexOf('blue')) //2

//22. merge a fruits array and a vegetabbles array.
let arr4=["banana","mango","apple","grappes"]
let arr5=["onion","potatos","tomatos","coriender"]
let results= arr4.concat(arr5)
console.log(results)  //[  'banana',  'mango','apple',   'grappes','onion',   'potatos','tomatos', 'coriender']

//23. sort student marks in ascending order.
let arr6=[75,65,70,50,90,40]
arr6.sort((a,b) => (b-a))
console.log(arr6) //[ 90, 75, 70, 65, 50, 40 ]

//24. reverse a city names array.
let arr7=["mumbai","delhi","pune","ahmedabad"]
console.log(arr7.reverse())  //[ 'ahmedabad', 'pune', 'delhi', 'mumbai' ]