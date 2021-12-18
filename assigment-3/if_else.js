// Question (01)

var divide = prompt("Enter the division")

if (divide % 3 == 0) {
    alert("this is divide by " + 3)
} else {
    alert
        ("this is not divide by " + 3)
}



// Question (02)

var num = prompt("Write for check number EVEN or ODD")

if (num % 2) {
    alert("This is ODD number")
} else {
    alert("This is EVEN number")
}



// Question (03)

var age = prompt("Write your age here...")

if (age >= 18) {
    alert("Old enough")
} else if (age <= 18) {
    alert("Too young")
} else {
    alert("Please enter age in number. Thank You!")
}



// Question (04)

var name = prompt("Write your name")

if (name === "Amjad") {
    alert("This Name is Already exist")
} else {
    alert("Welcome " + name + "!")
}



// Question (05)

var divide = prompt("Enter the division")

if (divide % 3 == 0) {
    alert("this is divide by " + 3)
} else if (divide % 3 !== 0) {
    alert
        ("this is not divide by " + 3)
}



// Question (06)

var numb = prompt("Enter Number or String")
if (numb === "A") {
    alert("A = 65 & this is Upercase")
} else if (numb === "a") {
    alert("a = 97 & this is lowercase")
} else if (numb === "Z") {
    alert("Z = 90 & this is upercase")
} else if (numb === "z") {
    alert("z = 122 & this is lowercase")
}



// Question (07)

alert("Welcome to my calculator!")
var num1 = +prompt("Enter a Number (Note)! If u want to % so u Enter obtained marks here")
var sign = prompt("Enter the sign to Calculator Like + , - , * , / ,%")
var num2 = +prompt("Enter a Number (note)! if u want to % so u Enter total marks here")
var add = "+"
var sub = "-"
var mul = "*"
var div = "/"
var per = "%"

if (sign === add) {
    alert(num1 + num2)
} else if (sign === sub) {
    alert(num1 - num2)
} else if (sign === mul) {
    alert(num1 * num2)
} else if (sign === div) {
    alert(num1 / num2)
} else if (num1 % num2) {
    alert(num1 * 100 / num2 + "%")
}



// Question (08)

var time1 = prompt("Enter time like this 12:00 pm")

if (time1 >= 0000 && time1 <= 1200) {
    alert("Good Morning")
} else if (time1 >= 1200 && time1 <= 1700) {
    alert("Good Afternoon")
} else if (time1 >= 1700 && time1 <= 2100) {
    alert("Good Evening")
} else if (time1 >= 2100 && time1 <= 2359) {
    alert("Good Night")
}



// Question (09)

var year = prompt("enter year")

if (year % 400 == 0 || year % 4 == 0) {
    alert("this is leap year")
} else if (year % 100 == 0) {
    alert("not leap year")
} else {
    alert("this is not a leap year")
}



// Question (10)

var pass1 = prompt("Please Enter Your Password")
var pass2 = prompt("Confirm passowrd")

if (pass1 === pass2) {
    alert("Correct! The Password you entered matches the orignal password")
    alert("Thank You!")
} else {
    alert("Incorrect password")
}



// Question (11)

var first_name = prompt("Enter user name")

if (first_name === "Amjad") {
    alert("Hello " + first_name)
} else {
    alert("You are not Amjad")
}



// Question (12)
var greeting = prompt("Enter time")
var hour = 13

if (greeting <= 18) {
    alert("Good day")
} else if (greeting >= 18) {
    alert("Good evening")
}




// Qusstion (13)

var num1 = prompt("Input the First integer", "0");
var num2 = prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    alert("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
    alert("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
    alert("The values " + num1 + " and " + num2 + " are equal.");
}


// Question (14)

var inp_1 = prompt("Enter a number")

if (inp_1 <= 0) {
    alert("This is Negtive Number")
} else {
    alert("This is Positive Number ")
}



// Question (15)

var time = prompt("What's time is it? Enter in clock format like (12 am)")

if (time >= 6 + "am" && time <= 9 + "am") {
    alert("Breakfast is served.")
} else if (time >= 11 + "am" && time <= 13 || time >= 11 + "am" && time >= 1 + "pm") {
    alert("Its time for launch")
} else if (time >= 17 && time <= 20) {
    alert("It's dinner time.")
} else {
    alert("Sorry, you'll have to wait, or go get a snack.")
}




// Question (16)


var string = "amjad"
var num = 5
var bolean = true

alert(' "This is" ' + typeof string + " value")
alert("5 is " + typeof num)
alert("true or false is " + typeof bolean + " value")




// Question (17)

var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
    alert("Its a vowel");
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
    alert("Its a consonant");
} else {
    alert("Invalid input please enter an alphabet");
}

// Question (18)

var equal = prompt("Enter value for chek equal or not")

if (equal != 8) {
    alert("this is not Equal")
} else {
    alert("they are equal")
}