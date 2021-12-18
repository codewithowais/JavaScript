//--------------------
//Question (01)
// Solution for Q1

var student_name = ["Owais", "Humza", "kashif"]

var student_score = [490, 330, 480]




console.log("Score OF " + student_name[0] + " is " + student_score[0] + " . Percentage " + student_score[0] / 500 * 100 + " % ")

console.log("Score OF " + student_name[1] + " is " + student_score[3] + " . Percentage " + student_score[1] / 500 * 100 + " % ")

console.log("Score OF " + student_name[2] + " is " + student_score[2] + " . Percentage " + student_score[2] / 500 * 100 + " % ")





//--------------------
//Question (02)
// Solution for Q2

function sunofNum(N) {
    var total = 0;

    for (var i = 1; i <= N; i++) {

        total += i;

    }

    return total;

}

sunofNum(100)




//--------------------
//Question (03)
// Solution for Q3

var table = +prompt("Please enter table number")

var length = +prompt("Please enter length of table")


for (var i = 1; i <= length; i++) {
    console.log(table + " x " + i + " = " + table * i)

}





//--------------------
//Question (04)
// Solution for Q4


//(A)
console.log("Counting:")

for (var i = 1; i <= 15; i++) {

    console.log(i)
}




//(B)
console.log("Reverse Counting: ")

for (var i = 10; i <= 1; i--) {

    console.log(i)
}




//(C)
console.log("Even")

for (var i = 0; i <= 20; i = i + 2) {
    console.log(i)
}




//(D)
console.log("odd")

for (var i = 1; i <= 20; i = i + 2) {

    console.log(i)
}




//(E) console.log("Series")

for (var i = 0; i <= 20; i = i + 2) {
    console.log(i + "K")
}



//--------------------
//Question (05)
// Solution for Q5

var arrayNum = [24, 53, 78, 91, 12];

var smallest = arrayNum.sort((a, b) => a - b);

var largest = 0;

for (var i = 0; i <= largest; i++) {

    if (largest < arrayNum[i]) {

        largest = arrayNum[i];

    }
}


console.log("The largest number is " + largest);

console.log("The smallest number is " + smallest[0]);




//--------------------
//Question (06)
// Solution for Q6

function isPalindrome(text) {

    var reverseText = text.split('').reverse().join('')


    if (reverseText === text) {

        alert(text + " is palindrome")

    }
    else {

        alert(text + " is not palindrome")
    }
}



//--------------------
//Question (07)
// Solution for Q7




function alphabet(arr) {

    var seriesArr = ["p", "a", "k"]

    var newArr = []


    for (var i = 0; i < arr.length; i++) {


        for (var j = 0; j < seriesArr.length; j++) {


            if (arr[i] === seriesArr[j]) {

                newArr.push(arr[i])


            }

        }

    }

    return newArr


}


alphabet(["a", "b", "q", "p", "a", "l", "p", "a", "k", "w", "x", "z"])




//--------------------
//Question (08)
// Solution for Q8


function stringid(l) {


    var text = "";

    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


    for (var i = 0; i < l; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));

    }


    return text;
}


console.log(stringid(8));





//--------------------
//Question (09)
// Solution for Q9


const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));



console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));

console.log(filter_Non_Unique([1, 2, 3, 4]));




//--------------------
//Question (10)
// Solution for Q10

function timeconvert(minutes) {


    var hour = Math.floor(minutes / 60)

    var minute = minutes - (hour * 60)

    console.log(minutes + " minutes = " + hour + " hour(s) and " + minute + " minutes(s)")

}

timeconvert(400)
