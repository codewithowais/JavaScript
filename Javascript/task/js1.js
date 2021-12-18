// Q1
// var name = prompt("plesae enter your name");
// alert("Hi " + name);

// Q2
// var num = prompt("enter any num");
// var int = 1;
// alert(
//   num +
//     " X " +
//     int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int +
//     "\n" +
//     num +
//     " X " +
//     ++int +
//     " = " +
//     num * int
// );

// Q3
// var city = prompt("enter city name");
// if (city == "karachi") {
//   alert("city of karachi");
// } else {
//   alert("city of qalandars");
// }
// Q4
// var gender = prompt("Enter your gender");
// if (gender == "male") {
//   alert("Good morning sir");
// } else {
//   alert("Good morning ma'am");
// }
// Q5
// var color = prompt("Enter color");
// if (color == "red") {
//   alert("vehicles must stop");
// } else if (color == "yellow") {
//   alert("vehicles ready to move");
// } else {
//   alert("vehicles can go now");
// }

//  Q6
// var age = prompt("enter your age");
// var maxAge = prompt("enter your max age");
// if (+age <= +maxAge) {
//   alert("welcome");
// } else {
//   alert("not allowed");
// }

//  Q7
// var fuel = prompt("Enter your current fuel");
// if (+fuel < 0.25) {
//   alert("please refill you tank");
// } else {
//   alert("you are good to go");
// }

// Q8
//A
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// if condition will run because pre increment make a=5

//B
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
//if condition will not run because post increament will remain b =82

//C
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// condition 2 and 4 will run because in above post and pre increament, it increase the value 12 to 14

//D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if condition will run because because the sum after will be equal to the total cost and their data type is same

//E
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// true will run

//F
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
//if condition will run

// Q9
// var sub1Marks = prompt("enter maths marks");
// var sub2Marks = prompt("enter physics marks");
// var sub3Marks = prompt("enter computer marks");
// var totalMarks = prompt("enter total marks");
// var obtMarks = +sub1Marks + +sub2Marks + +sub3Marks;
// var percentage = (obtMarks / totalMarks) * 100;
// if (percentage >= 80) {
//   alert(
//     "total marks : " +
//       totalMarks +
//       "\n marks obtain : " +
//       obtMarks +
//       " percentage : " +
//       percentage +
//       "\n Grade : A-1" +
//       "\n remarks : Excellent"
//   );
// } else if (percentage >= 70) {
//   alert(
//     "total marks : " +
//       totalMarks +
//       "\n marks obtain : " +
//       obtMarks +
//       " percentage : " +
//       percentage +
//       "\n Grade : A" +
//       "\n remarks : Good"
//   );
// } else if (percentage >= 60) {
//   alert(
//     "total marks : " +
//       totalMarks +
//       "\n marks obtain : " +
//       obtMarks +
//       " percentage : " +
//       percentage +
//       "\n Grade : B" +
//       "\n remarks : you need to improve"
//   );
// } else if (percentage < 60) {
//   alert(
//     "total marks : " +
//       totalMarks +
//       "\n marks obtain : " +
//       obtMarks +
//       " percentage : " +
//       percentage +
//       "\n Grade : Fail" +
//       "\n remarks : sorry"
//   );
// }

// Q10
// var nitem1 = prompt("Enter Product1 Name");
// var pitem1 = prompt("Enter Product1 price");
// var qItem1 = prompt("Enter Product1 quantity");
// var nitem2 = prompt("Enter Product2 Name");
// var pitem2 = prompt("Enter Product2 price");
// var qItem2 = prompt("Enter Product2 quantity");
// var shipCharges = prompt("Enter shipping charges");
// var total1 = +pitem1 * +qItem1;
// var total2 = +pitem2 * +qItem2;
// var totalAll = +total1 + +total2 + +shipCharges;
// var discount = (totalAll * 10) / 100;
// if (totalAll > 2000) {
//   alert(
//     "price of " +
//       nitem1 +
//       " is " +
//       pitem1 +
//       "\n" +
//       "quantity of " +
//       nitem1 +
//       " is " +
//       qItem1 +
//       "\n" +
//       "price of " +
//       nitem2 +
//       " is " +
//       pitem2 +
//       "\n" +
//       "quantity of " +
//       nitem2 +
//       " is " +
//       qItem2 +
//       "\n \n" +
//       "shiping charges is " +
//       shipCharges +
//       "\n \n" +
//       "total coast of your order is " +
//       totalAll +
//       " PKR" +
//       "\n Dicounted price : " +
//       (totalAll - discount)
//   );
// } else {
//   alert(
//     "price of " +
//       nitem1 +
//       " is " +
//       pitem1 +
//       "\n" +
//       "quantity of " +
//       nitem1 +
//       " is " +
//       qItem1 +
//       "\n" +
//       "price of " +
//       nitem2 +
//       " is " +
//       pitem2 +
//       "\n" +
//       "quantity of " +
//       nitem2 +
//       " is " +
//       qItem2 +
//       "\n \n" +
//       "shiping charges is " +
//       shipCharges +
//       "\n \n" +
//       "total coast of your order is " +
//       totalAll +
//       " PKR"
//   );
// }

// Q11
// var sNum = prompt("enter any number from 1 to 10");
// if (sNum == 5) {
//   alert("BINGO !!, CORRECT");
// } else if (sNum == 4 || 6) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Wrong");
// }

// Q12
// var divNum = prompt("enter any number to check it is divisible by 3 or not");
// if (divNum % 3 == 0) {
//   alert("it's divisible by 3");
// } else {
//   alert("it's not divisible by 3");
// }
console.log();
