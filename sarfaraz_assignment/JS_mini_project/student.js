// for Module not fond to type in terminal((npm i prompt-sync))


//student report card system
//create a program where users enters:
//.student name:
//.marks of 5 subjects
//calculate:
//.total
//percentage
//.Grade(A/B/C/Fail using if else)
    //finally print a full report card
    const prompt = require("prompt-sync")();
    let name = prompt("enter the student name:")
    let marks1 = Number(prompt("enter the marks of 1 subject:"))
    let marks2 = Number(prompt("enter the marks of 2 subject:"))
    let marks3 = Number(prompt("enter the marks of 3 subject:"))
    let marks4 = Number(prompt("enter the marks of 4 subject:"))
    let marks5 = Number(prompt("enter the marks of 5 subject:"))
    let total = marks1+marks2+marks3+marks4+marks5
    let percentage = total/5
    let grade
    if(percentage>=90){
        grade="A"
    }
    else if(percentage>=75){
        grade="B"
    }
    else if(percentage>=60){
        grade="C"
    }
    else{
        grade="Fail"
    }
    console.log("name:",name)
    console.log("marks1:",marks1)
    console.log("marks2:",marks2)
    console.log("marks3:",marks3)
    console.log("marks4:",marks4)
    console.log("marks5:",marks5)
    console.log("total:",total)
    console.log("percentage:",percentage +"%")
    console.log("grade:",grade)