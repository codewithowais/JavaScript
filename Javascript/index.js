// var cssMarks = prompt("Enter Math Marks")
// var totalMarks = +htmlMarks + +cssMarks
// console.log('Total Marks--> ',
//     totalMarks)
// var percent = total_Marks * 100 / 200
// console.log('Percentage--> ',
//     percent + " %")​
// if (percent >= 80) {
//     alert("Bhai tu to cheeta hai!.....")
// } else {
//     alert("BHai Ab Tujhpe bharosa nh hai!......")
// }

var cssMarks = prompt("Enter Math Marks")
var totalMarks = +htmlMarks + +cssMarks
console.log('Total Marks--> ',
    totalMarks)
var percent = total_Marks * 100 / 200
console.log('Percentage--> ',
    percent + " %")​
if (percent >= 80) {
    alert("Bhai tu to cheeta hai!.....")
} else if (percent >= 50) {
    alert("Bhai tujhy cheeta banna hai!.....")
} else {
    alert("BHai AB Tujhpe Bharoosa nh hai!..")
}



/*=================================================================
                            28-03-2020
==================================================================*/
var num = 10
num++ + ++num * num-- + "hello world" && "oo kher!"

true + true * false && true && "hello world"
"hello world"


//Arrays
//Collection OF Items
var list = ["dhaniya", "podina"]
list.push = ("Mooli")
    // Add karny k liye arrays ma kuch last sy
list.pop("")
    //Koi value nikalny k liye
list.unshift("")
    //Start sy kuch add karny k liye
list.shift("")
    // last sy kuch nikalny k liye last
    /*================================================
                        False Values
    =================================================
    1) 0
    2) undefined
    3) Nan
    4) null
    5) false
    6) ""
    */
    //Splice (Koi BHe Cheeez ko Nikalna or dalna kar sakty h 
    // one BY One Argument k Zariye)

// ==! -1 iska matlab ha k agr

/*=============================================================
                        Class JavaScript
===============================================================*/
var userNumber = prompt("Enter Your Number")
for (var i = 1; i <= userNumber; i++) {
    console.log(i)
}
var userNumber = prompt("Enter Your Number")
var sum = 0
for (var i = 1; i <= userNumber; i++) {
    console.log(i)
    sum = sum + i
}