//Question 01
var user_Name = prompt("Enter Your Name")
alert("Hi! " + user_Name)

// Question (02)
var que5_1 = prompt("Enter a Number Here")
if (!que5_1) {
    que5_1 = 5
}
console.log(que5_1 + " X 1 = " + que5_1 * 1)
console.log(que5_1 + " X 2 = " + que5_1 * 2)
console.log(que5_1 + " X 3 = " + que5_1 * 3)
console.log(que5_1 + " X 4 = " + que5_1 * 4)
console.log(que5_1 + " X 5 = " + que5_1 * 5)
console.log(que5_1 + " X 6 = " + que5_1 * 6)
console.log(que5_1 + " X 7 = " + que5_1 * 7)
console.log(que5_1 + " X 8 = " + que5_1 * 8)
console.log(que5_1 + " X 9 = " + que5_1 * 9)
console.log(que5_1 + " X 10 = " + que5_1 * 10)

//Question 03
var city_Name = prompt("Enter Your City Name")
if (city_Name === "karachi") {
    alert = ("Welcome to city of lights ")
} else {
    alert = ("Welcome To " + city_Name)
}


//Question 04
var gender = prompt("Enter Your Gender")
if (gender === "male") {
    alert("Good Morning Sir")
} else if (gender = "female") {
    alert("Goosd Morning Mam")
}


//Question 05
var signal_Color = prompt("Enter Signal Color here")

if (signal_Color === "red") {
    alert("vehicles must Stop")
} else if (signal_Color === "yellow") {
    alert("vehicles should get ready to move")
} else if (signal_Color === "green") {
    alert("vehicles can move nows")
} else {
    alert("Invalid Value")
}


//Question(06)
var current_Age = prompt("Enter Your Current age")
var max_Age = prompt("Enter Your Max age")
if (current_Age <= max_Age) {
    alert("You are welcome")
}


// Question (07)
var fuel = prompt("Enter your current fuel");
if (+fuel < 0.25) {
    alert("Please refill the fuel in your car ");
} else {
    alert("you are good to go");
}

// Question (08)

// (A)
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// The alert message "given condition for variable a is true"

// (B)
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// The Output is undefined

// (C)
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// The Output is "The Condition 2 is True"
// & "The Condition 4 is True"

// (D)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// The Output is "The cost equals"

// (E)
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// The Output is "True"


// (F)
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// The Output is "car is smaller than cat"



//Question (09)
var total_Marks = prompt("Enter Total Marks Of Student")
var obt_Marks = prompt("Enter Obtained Marks Of Student")
var percentage = obt_Marks * 100 / total_Marks
if (percentage >= 80) {
    console.log("Total Marks Is : " + total_Marks)
    console.log("Marks Obtained : " + obt_Marks)
    console.log("Your Percentage is " + percentage + " %")
    console.log("Your Grade Is A-one")
    console.log("Remarks : Excellent")
} else if (percentage >= 70) {
    console.log("Total Marks Is : " + total_Marks)
    console.log("Marks Obtained : " + obt_Marks)
    console.log("Your Percentage is " + percentage + " %")
    console.log("Your Grade Is A")
    console.log("Remarks : Good")
} else if (percentage >= 60) {
    console.log("Total Marks Is : " + total_Marks)
    console.log("Marks Obtained : " + obt_Marks)
    console.log("Your Percentage is " + percentage + " %")
    console.log("Your Grade Is B")
    console.log("Remarks : You need to improve")
} else if (percentage <= 60) {
    console.log("Total Marks Is : " + total_Marks)
    console.log("Marks Obtained : " + obt_Marks)
    console.log("Your Percentage is " + percentage + " %")
    console.log("Your Grade Is F")
    console.log("Remarks : Sorry")
}


// Question(10)
var i_name1 = prompt("Enter Name of Item 1")
var i_name2 = prompt("Enter Name of Item 2")
var item_1 = +prompt("Price of item_1")
var item_2 = +prompt("Price of item_2")
var q_item1 = +prompt("Quantity of item_1")
var q_item2 = +prompt("Quantity of item_2")
var ship_Charges = +prompt("Enter Shipping Charges")
var pr_1 = (item_1 * q_item1)
var pr_2 = (item_2 * q_item2)
var total_price = (pr_1 + pr_2 + ship_Charges)

console.log("price of " + i_name1 + " is " + item_1)
console.log("Quantity of " + i_name1 + " is " + q_item1)
console.log("price of " + i_name2 + " is " + q_item2)
console.log("Quantity of " + i_name2 + " is " + q_item2)
console.log("shiping charges is " + ship_Charges)
console.log("total cost of your order is " + total_price + " PKR ")




// question (11)var guess = prompt("Enter any guess number")
if (guess <= 10) {
    alert("Bingo! Correct answer")
} else if (guess <= 20) {
    alert("Close enough to the correct answer")
} else {
    alert("wrong")
}


// Question (12)
var




// Question (13)
var team_name1 = prompt("Enter First Team Name")
var team_name2 = prompt("Enter Second Team Name")
var team_scr1 = prompt("Enter First Team Score")
var team_scr2 = prompt("Enter Second Team Score")

if (team_scr1 == team_scr2) {
    alert("Match is tie")
} else if (team_scr1 >= team_scr2) {
    alert("Team One Won The Match")
} else if (team_scr2 >= team_scr1) {
    alert("Team Two Won the Match")
}

// Question (14)
var type1 = prompt("")
var type2 = promt("")