/*
================================================================
							First                          
						VARIABLES FOR NUMBERS
===============================================================
*/


// Question (01)
var age = prompt("Enter Your Age");
alert("I am " + age + " year Old");



// Question (02)
var visit = prompt("How many times a visitor has visited a web page.");
alert("You have visited this site " + visit + " times");



// Question(03)
var birth = prompt("What is your birth yaer");
console.log("My Birth year is " + birth + " Data type of my declared variable is Type of Birth Year");
typeof (birth);

// Question(04)
var name_1 = prompt("Enter Your Name");
var product = prompt("Enter Product Name Which You Want");
var quantity = prompt("Enter Your Product quantity");
console.log(name_1 + " ordered " + quantity + product + " On Owais.com");

/*
=============================================================
							Second                         
						Math Expressions
=============================================================
*/

// Question(01)
var num_1 = 13;
var num_2 = 9;
var num_3 = num_1 + num_2;
console.log("Sum Of " + num_1 + " and " + num_2 + " is " + num_3);


// Question(02)
var num_1 = 13;
var num_2 = 9;
var num_3 = num_1 - num_2;
console.log("Result Of Subtracting " + num_2 + " from " + num_1 + " is " + num_3);


var num_1 = 13;
var num_2 = 9;
var num_3 = num_1 * num_2;
console.log("Result Of Multiplying " + num_1 + " and " + num_2 + " is " + num_3);



var num_1 = 13;
var num_2 = 9;
var num_3 = num_1 / num_2;
console.log("Result Of Dividing " + num_1 + " by " + num_2 + " is " + num_3);
console.log("Result Of Dividing " + num_1 + " by " + num_2 + " is " + num_3);

// Question (03)
var que3_1 = 3;
var que3_2 = ++que3_1;
var que3_3 = que3_2 + 7;
console.log(que3_3);
var que3_4 = --que3_3;
console.log(que3_4);
var que3_5 = que3_4 % 3;
console.log(que3_5);

// Question (04)
var que4_1 = 600;
var que4_2 = prompt("Enter Your Tickects Quantity");
var que4_3 = que4_1 * que4_2;
console.log("Total Cost to Buy " + que4_2 + " Tickets to a movive is " + que4_3 + " PKR");

// Question (05)
var que5_1 = prompt("Enter Your Table Number");
console.log(que5_1 + " * 1 = " + que5_1 * 1);
console.log(que5_1 + " * 2 = " + que5_1 * 2);
console.log(que5_1 + " * 3 = " + que5_1 * 3);
console.log(que5_1 + " * 4 = " + que5_1 * 4);
console.log(que5_1 + " * 5 = " + que5_1 * 5);
console.log(que5_1 + " * 6 = " + que5_1 * 6);
console.log(que5_1 + " * 7 = " + que5_1 * 7);
console.log(que5_1 + " * 8 = " + que5_1 * 8);
console.log(que5_1 + " * 9 = " + que5_1 * 9);
console.log(que5_1 + " * 10 = " + que5_1 * 10);

// Question (06)
var que6_1 = prompt("Enter Temprature of your area");
var que6_2 = (que6_1 * 9 / 5) + 32;
console.log("Your Temprature is = " + que6_2 + " Fahrenheit");

// Question(07)
var que7_1 = +prompt("Price of item_1");
var que7_2 = +prompt("Price of item_2");
var que7_3 = +prompt("Quantity of item_1");
var que7_4 = +prompt("Quantity of item_2");
var que7_5 = 150;
var que7_6 = (que7_1 * que7_3);
var que7_7 = (que7_2 * que7_4);
console.log("Total Cost Of Your Orderd is " + que7_5 + que7_6 + que7_7 + " PKR");


// Question(08)
// var que8_1 = prompt("Enter Number")
// var que8_2 = prompt("Enter Number")
// var que8_3 = prompt("Enter Number")
// var que8_4 = prompt("Enter Number")
// var que8_5 = que8_1 + que8_2 + que8_3 + que8_4
// var que8_6 = que8_5 * 100 / 400
// console.log(que8_6)

// Question(08)
var total_Marks = prompt("Enter Total Marks Of Student");
var obt_Marks = prompt("Enter Obtained Marks Of Student");
var percentage = obt_Marks * 100 / total_Marks;
console.log("Your Student's Percentage is " + percentage + "%");

// Question (09)
var dollar = prompt("Enter Currency in dollar");
var riyal = prompt("Enter Currency in riyal");
var con_1 = dollar * 104;
var con_2 = riyal * 28;
console.log("Total Currency in PKR : " + "con_1" + "con_2");

// Question (10)
var que10_1 = prompt("Enter your Any favourite Number");
var que10_2 = que10_1 + 5 * 10 / 2;
console.log("Calculation is " + que10_2);

// Question (11)
var current_Year = 2020;
var birth_Year = prompt("Enter You Birth Year");
var result_11 = current_Year - birth_Year;
console.log("You Age is " + result_11);


//Question (12)
var radius = prompt("Enter Radius");
var result_12 = 2 * 3.142 * radius;
console.log("The Area Is " + result_12);

// Question (13)
var que13_1 = 10;
var res13_1 = ++que13_1;
console.log("Now The value of a is " + res13_1);
var res13_2 = (res13_1++)
console.log("Now The value of a is " + res13_1);
var res13_3 = (--res13_1)
console.log("Now The value of a is " + res13_1);
var res13_4 = (--res13_1)
console.log("Now The value of a is " + res13_1);

//Question (14)
var a = 2;
var b = 1;
var res14_1 = (--a - --b + ++b + b--);
console.log("The Result Is " + res14_1);

// Question (15)
var que15_1 = prompt("Enter your Favorite Snack");
var que15_2 = prompt("Enter Your Current age");
var que15_3 = prompt("Enter Your Max age");
var que15_4 = prompt("Enter an Estimated amount per day");
var que15_5 = (que15_3 - que15_2);
console.log("You Will Need " + que15_5 + que15_1 + " to last you untile the rip old age of " + que15_3);