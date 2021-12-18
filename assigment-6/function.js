//Q1

function mul(a, b) {
    console.log(a * b)
}
mul(2, 5)



//Q2
function date() {
    console.log(new Date())
}
date()



//Q3
function fullName(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName)
}
fullName("Rafay", "Irfan")



//Q4
function sum(a, b) {
    console.log(a + b)
}
sum(2, 6)



//Q5
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
    }
}



//Q6
function square(num) {
    return num * num
}



//Q7
function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5)



//Q8
function counting() {
    var start = +prompt("Enter counting start number")
    var end = +prompt("Enter counting end number")
    for (var i = start; i <= end; i++) {
        console.log(i)
    }
}



//Q9
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}



//Q10
function argumentLength() {
    return arguments.length
}



//Q11
function largestNumber() {
    var maxValue = 0
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) {
            maxValue = arguments[i]
        }
    }
    console.log(maxValue)
}
largestNumber(4, 40, 10)



//Q12
function areaRectangle(width, height) {
    return width * height
}
areaRectangle(4, 5)



//Q13

var arr = [6, 3, 5, 4]

function sortArray(array) {
    return array.sort()
}

sortArray(arr)



//Q14
var arrayValue = [2, 6, 9, 10, 3]

function arraySum() {
    var sum = 0
    for (var i = 0; i < arrayValue.length; i++) {
        sum += arrayValue[i]
    }
    console.log(sum)
}



//Q15
var param = function inner() {
    return typeof inner;
}
alert(param()); //Type of Function is FUNCTION



//Q16
function power(value, power) {
    var mul = 1
    for (var i = 1; i <= power; i++) {
        mul *= value
    }
    console.log(mul)
}



//Q17
function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1
    return dice
}
rollDice()



//Q18
function reversedNum(num) {
    return (
        parseFloat(
            num
            .toString()
            .split('')
            .reverse()
            .join('')
        )
    )
}



//Q19
function isPalindrome(text) {
    var reverseText = text.split('').reverse().join('')

    if (reverseText === text) {
        alert(text + " is palindrome")
    } else {
        alert(text + " is not palindrome")
    }
}



//Q20
var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))



//Q21
function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));



//Q22

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));



//Q23
function type(value) {
    return typeof(value)
}



//Q24
function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var i = 0; i < str.length; i++) {

        if (uniql.indexOf(str.charAt(i)) == -1) {
            uniql += str[i];

        }
    }
    return uniql;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));



//Q25
function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l) {
        uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
    });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));



//Q26

function calculateAge(currYear, birthYear) {
    console.log("Current Year: " + currYear)
    console.log("Birth Year: " + birthYear)
    console.log("You are either " + (currYear - birthYear) + " or " + ((currYear - birthYear) - 1) + " Years Old")

}



//Q27
var maxAge = 100;

var calculateSupply = function(age, amountPerDay) {
    timeLeft = maxAge - age;
    amountPerDay = Math.round(amountPerDay); //converts floating point values to a round number
    amountConsumed = timeLeft * amountPerDay;
    var message = "You will need " + amountConsumed + " to last you until the ripe old age of " + maxAge;
    console.log(message);
}

calculateSupply(34, 7.8);



//Q28

function circum(radius) {
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + Math.floor(circle))
}
circum(3)

function area(radius) {
    var circle = Math.PI * (radius * radius)
    alert("The area is: " + Math.floor(circle))
}
area(3)



//Q29
function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45);