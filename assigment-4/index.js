//Question (01)

for (var i = 0; i < 5; i++) {
    console.log("Hello World")
}



//Question (02)

for (var i = 1; i <= 10; i++) {
    console.log(i)
}



// Question (03)

var table = +prompt("Please enter table number")
var length = +prompt("Please enter length of table")

for (var i = 1; i <= length; i++) {
    console.log(table + " x " + i + " = " + (table * i))
}



// Question (04)

var A = ["nokia", "samsung", "apple", "sony", "huawei"]

for (var i = 0; i < A.length; i++) {
    console.log(A[i])
}



//Question (05)

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}

//Question (06)

var numberItem = +prompt("Enter number of items")
var items = []

for (var i = 0; i < numberItem; i++) {
    items[i] = prompt("Enter value for index " + i)
}
console.log("items: " + items)



//Question (07)


//a
console.log("Counting:")
for (var i = 1; i <= 15; i++) {
    console.log(i)
}


//b
console.log("Reverse Counting: ")
for (var i = 10; i <= 1; i--) {
    console.log(i)
}


//c
console.log("Even")
for (var i = 0; i <= 20; i = i + 2) {
    console.log(i)
}


//d
console.log("odd")
for (var i = 1; i <= 20; i = i + 2) {
    console.log(i)
}


//e
console.log("Series")
for (var i = 0; i <= 20; i = i + 2) {
    console.log(i + "K")
}



//Question (08)

var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcom! What you want?")
var isFound = false //this is called flag

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}



//Question (09)

var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort()
console.log("The largest number is: " + A[A.length - 1])



//Question (10)

var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort().reverse()
console.log("The smallest number is: " + A[A.length - 1])



//Question (11)

var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort()
console.log("The largest number is: " + A[A.length - 1])
A = A.reverse()
console.log("The smallest number is: " + A[A.length - 1])



//Question (12)

for (var i = 1; i <= 20; i++) {
    console.log(5 * i)
}



//Question (13)

var students = ["ali", "sami", "taha", "inam"]
var scores = [58, 73, 89, 90]

console.log("Students Scores")
for (var i = 0; i < students.length; i++) {
    console.log(students[i] + " " + scores[i])
}



//Question (14)

var scores = [12, 45, 3, 22, 34, 50]
var inputStop = +prompt("Enter stop value")

for (var i = 0; i < scores.length; i++) {
    console.log(scores[i])
    if (inputStop === scores[i]) {
        break
    }
}



//Question (15)

var A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (var i = 0; i < A.length; i++) {
    console.log(A[i])
}



//Question (16)

var num = +prompt("Enter a number")

for (var i = 0; i = num; i++) {
    var num = num - 0.5
    console.log(num)
}



//Question (17)

for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even")
    } else if (i % 2 != 1) {
        console.log(i + " is odd")
    }
}



// Question (18)

var product = 1
for (var i = 1; i <= 7; i += 2) {
    product = product * i;
}



// Question (19)
var stars = prompt("how many Stars")
for (var i = stars; i >= 1; i--) {
    var star = "";
    for (var j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star)
}




// Question 20

// (A) 

var starInput = +prompt("Enter number of lines")

for (var i = 1; i <= starInput; i++) {
    var star = ""
    for (var j = starInput; j >= 1; j--) {
        star += "*"
    }
    console.log(star)
    console.log(" ")
}


// ("B")

var starInput = +prompt("Enter how much star you want?")

for (var i = starInput; i >= 1; i--) {
    var star = "";
    for (var j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star)
}

// ("C")var stars = prompt("how many Stars")

var starInput = +prompt("Enter how much star you want?")

for (var i = starInput; i >= 1; i--) {
    var star = "";
    for (var j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star)
}