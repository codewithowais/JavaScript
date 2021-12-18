// Question (01)
var student_name = []
student_name.push("Amjad", "Owais", "Kashif", "Ali", "Shahbaz", "husain", "shadab")



//Question (2)
var student_name = []
student_name.push("Owais", "Amjad", "Kashif", "Ali", "Shahbaz", "husain", "shadab")




//Question (03)
var srting = ["Karachi", "Islamabad"]





//Question (04)
var num = [1, 2]




//Question (05)
var boolean = [true, false]




//Question (06)
var mixed = [true, false, 3, 4, "Quetta", "Pishawar"]




//  Question (07)
var network = ["Zong", "Waird", "Jazz", "Ufone", "Telenor"]




// Question (08)
var quali = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD']
console.log(quali)




//Question (09)
var movie = []
movie.push("Avengers Endgame", "Dabang 3", "Baghi 3")
movie.length




//Question (10)

var cars = []
cars.push("Swift", "Mehran", "Mera", "Civic", "Corolla", "ALto", "Cultus")



// (01)
console.log(0)


// (02)
cars[0]


// (03) **Find of last array**
cars.lenght - 1


// (04)
cars[car.length - 1]




// Question (11)
var student_name = ["Owais", "Amjad", "kashif"]
var student_score = [320, 230, 480]


console.log("Score OF " + student_name[0] + " is " + student_score[0] + " . Percentage " + student_score[0] / 500 * 100 + " % ")
console.log("Score OF " + student_name[1] + " is " + student_score[3] + " . Percentage " + student_score[1] / 500 * 100 + " % ")
console.log("Score OF " + student_name[2] + " is " + student_score[2] + " . Percentage " + student_score[2] / 500 * 100 + " % ")




//Question (12)
var colors = ["Red", "White", "blue", "grey"]
console.log(colors)

// (01)
var add_Color_start = prompt("what color he/she wants to add to the beginning")
colors.unshift(add_Color_start)

// (02)
var add_Color_End = prompt("what color he/she wants to add to the End")
colors.push(add_Color_End)

// (03)
colors.push("Pink", "Black")
console.log(colors)

// (04)

colors.shift()


// (5)
colors.pop()

// (6)
var del_Color_start = prompt("what color he/she wants to delete to the beginning")
colors.shift(del_Color_start)

// (7)
var del_Color_End = prompt("what color he/she wants to delete to the End")
colors.pop(del_Color_End)



/*========================================================================================

*****Some Important*****
1) array name.sort()                   *******Ascending order sorting *******
2) array name.sort().reverse           *******Descending order sorting *******
3) Array name.join(" ")                *******Arrays k items ko join kar deta hai*******
4) variable name.split(" ")            *******variable sy array banany ka tareeqa*******

==========================================================================================*/




// QUestion (13)
var scr = [320, 220, 105, 480, 310]
scr.sort()




// Question (14)
var scr = ["Mango", "Pineapple", "Apple", "banana", "Orange"]
scr.sort()




// Question (15)
var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
var new_1 = cityName.slice(1, 3)




// Question (16)
var arr = ['This', 'is', 'my', 'cat']
arr.join(" ")




// Question (17)
var fifo = []
fifo.push("Keyboard")
fifo.push("Mouse")
fifo.push("Joystick")
fifo.push("C.P.U")
fifo.push("Speaker")





// Question (18)
var fifo_end = []
fifo_end.unshift("Keyboard")
fifo_end.unshift("Mouse")
fifo_end.unshift("Joystick")
fifo_end.unshift("C.P.U")
fifo_end.unshift("Speaker")




















//Assignment 4 (Loop)
//Question (06)

var listLength = prompt("Enter array length")
var list = []
for (var i = 0; i = listLength; i++) {
    list[i] = prompt("Enter a Value for index " + i)
}
console.log("items: " + list)

// var numberItem = +prompt("Enter number of items")
// var items = []
// for (var i = 0; i < numberItem; i++) {
//     items[i] = prompt("Enter value for index " + i)
// }
// console.log("items: " + items)




// Question (07)

// (01)

for (var i = 1; i < 16; i++) {
    console.log("Counting: " + i)
}

// (02)

for (var i = 10; i >= 1; i--) {
    console.log(i)
}

// (03)

for (var i = 0; i <= 20; i = i + 2) {
    console.log(i)
}

// (04)

for (var i = 1; i <= 20; i = i + 2) {
    console.log(i)
}

// (05)

console.log("Series")
for (var i = 0; i <= 20; i = i + 2) {
    console.log(i + "K")
}




//Question (08)

// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var askUser = prompt("Welcome To My Bakery, Apko kia chaiye?")

// for (var i = 0; i < items.length; i++) {
//     if (items[i] === askUser) {
//         console.log(askUser + " is avaliable at index " + i + " in our bakery")
//         break
//     } else if (i === items.length - 1) {
//         console.log("We're sorry " + askUser + " is not avaliable in our bakery")
//     }
// }  ok hai but this code is cheap


var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var askUser = prompt("Welcome To My Bakery, Apko kia chaiye?")
var isFound = false
for (var i = 0; i < items.length; i++) {
    if (items[i] === askUser) {
        console.log(askUser + " is avaliable at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    console.log("We're sorry " + askUser + " is not avaliable in our bakery")
}