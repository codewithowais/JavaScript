// Question (01)

var firstname = prompt("enter first name")
var lastname = prompt("enter last name")
var fullname = firstname + lastname

alert("Your Fullname is " + fullname)



// Question(02)
var mob = prompt("Your favororite mobile phone model")​

console.log("My Favorite phone is: " + mob + "," + " length of sting: " + mob.length)



// Question (03)
var pak = "Pakistan"

pak.indexOf('n')



// Question (04)

var text = 'Hello world'

text.lastIndexOf('l')



// Question (05)

var pak = "Pakistani"

pak.charAt(3);



// Question (06)

var firstname = prompt("enter first name")
var lastname = prompt("enter last name")
var fullname = firstname.concat(' ' + lastname)

alert("Your Fullname is " + fullname)



// Question (07)

var que7 = "hyderabad"

que7.replace('hyder', 'islam')



// QUestion (08)

var message = "Ali and Sami are best friends. They play cricket and football together."

message.split("and").join("&")



// Question (09)

var word = "472"

console.log(word)
console.log(typeof(word))
console.log(word = +word)
console.log(typeof(word))



// Question (10)

var url = prompt("type url");
var newUrl = url.split("www.")

newUrl[1]



// Question (11)

var userInput = prompt("Enter any word")

console.log("User input: " + userInput)
console.log("Upper case: " + userInput.toLowerCase())



// Question (12)

var userInput = prompt("Enter any word")

console.log("User input: " + userInput)
console.log("Upper case: " + userInput.toUpperCase())



// Quesiton (13)

var userInput1 = prompt("enter your name")
var firstletter = userInput1[0].toUpperCase()

console.log(firstletter + userInput1.slice(1))



// Question (14)

// method (I)

var num = prompt('enter a dotted number')
num = num.split('.').join("")

// method (II)

var num = prompt('enter a dotted number')
num = num.replace('.', "")



// Question (15)

var a = prompt('enter a value of a')
var b = prompt('enter a value of b')

console.log('a is ' + a)
console.log('b is ' + b)
console.log('x is ' + (a + b))



// Question (16)

var a = prompt('enter a value of a')
var b = prompt('enter a value of b')

console.log('a is ' + a)
console.log('b is ' + b)
console.log('x is ' + (a - b))



// Question (17)

var name = prompt("Enter Your Valid User Name")

name = name.toLocaleLowerCase()
var check = false

for (i = 0; i < name.length; i++) {
    if (name.slice(i, i + 0).charCodeAt() > 97 && name.slice(i, i + 0).charCodeAt() < 122) {
        check = true;
    } else {
        check = false;
    }
}

if (check == false) {
    alert("please enter a correct user name")
} else {
    name
}



// Question (18)

var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcom! What you want?")
var isFound = false //this is called flag
inputCart = inputCart.toLocaleLowerCase()

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



// Question(19)

var name1 = prompt("Enter any word")
var name2 = prompt("Enter 2nd word")

if (name1 < name2) {
    console.log(name2 + " is grater then " + name1)
} else if (name1 > name2) {
    console.log(name1 + " is grater then " + name2)
} else {
    console.log("Both are Equal")
}



// ============Q20

var str = prompt();
var flag = 0
var count = 0
var ceck = +str.slice(0, 1)

if (ceck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < str.length; i++) {
        var cc = +str.slice(i, i + 1)
        if (cc.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == str.length) {
    alert("password does not meet above requirements")
} else {
    console.log("ok")
}



// ================Q21

var university = "University of Karachi";
var uni = university.split("")

for (i = 0; i < uni.length; i++) {
    console.log(uni[i]);
}



//===========Q22

var userinput = prompt();
var checkLastInput = userinput.slice(userinput.length - 1)

console.log("User input " + userinput)
console.log("Last character of input:" + checkLastInput)



// ====================Q23

var text1 = "The quick brown fox jumps over the lazy dog"
var flag = 0
var checker = "the "
var textcheck = text1.toLocaleLowerCase()

for (i = 0; i < textcheck.length; i++) {
    dd = textcheck.slice(i, (checker.length) + i)

    if (checker == dd) {
        flag++
    }
}

console.log(text1)
console.log("there are " + flag + " occurrence(s) of world 'the'")



//=========@24

var str = "Pakistan";
var flag = 0

for (i = 1; i < str.length; i++) {
    var check = str.slice(i, i + 1).toLocaleLowerCase();
    if (check == "a" || check == "e" || check == "i" || check == "o" || check == "u") {
        flag++
    }
}

console.log(flag)