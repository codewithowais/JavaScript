// ========Q1
var number = parseInt(prompt("typer number"))
console.log(number)
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))

// ==============Q2
var number = parseInt(prompt("typer number"))
console.log(number)
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))

// ==============Q3
var number = parseFloat(prompt("typer number"))
console.log(number)
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))

// ==============Q4
var number = parseFloat(prompt("typer number"))
console.log(number)
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))

// ========Q5
var number = -4
number =Math.abs(number)
console.log("the absolute value of -4 is "+ number)

//=========Q6
var dice=Math.ceil(Math.random() * 6);
console.log("Rendom dice value :"+dice)
//==========Q7
var coin = Math.ceil(Math.random() * 2);
if(coin == 2){
    console.log("random coin value: Head")
}
else{
    console.log("random coin value: tails")
}
//===========Q8
 var randomCounter = Math.ceil(Math.random() * 100);
 console.log("Random number between 1 and 100: " +randomCounter )

//==========Q9

//==========Q10
var coin = Math.ceil(Math.random() * 10);
var user=+prompt();

if(coin== user){
    console.log("congratulate")
}
else{
console.log("correct answer is: " +coin)
}

// ==========Q11
new Date()

//==========Q12
mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var date =new Date()
var month= date.getMonth()
console.log(mlist[month])

// ==========Q13
days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
var date =new Date()
var day= date.getDay()
console.log("Today is: " +days[day])

//==========Q14
var date =new Date()
var day= date.getDay()
if(date==0 || date== 6){
    console.log("it's Funny day")
}

// ============Q15d
var date =new Date()
var monthDate= date.getDate()
if(monthDate<=15){
    console.log("First fifteen days of the month")
}
else{
    console.log("Last fifteen days of the month")
}

//==========Q17
var date =new Date()
var hour= date.getHours()
if(hour<=12){
    console.log("It's AM")
}
else{
    console.log("It's PM")
}

//=========Q18
var laterDate= new Date("06/18/15")
var sec=new Date - laterDate
day=sec/(24*60*60*1000)

// ========Q21

var checkTime = new Date();
var oneYr = new Date();
var oldYear= oneYr.setHours(oneYr.getHours()-1);
var oldhund=new Date(oldYear)
console.log("Curent Year: "+checkTime+" 100 Year back, it was "+oldhund)

//=========@22
var oneYr = new Date();
var oldyear= oneYr.setYear(oneYr.getFullYear()-100);
var oldhund=new Date(oldyear)
console.log("Curent Year: "+oneYr+" 100 Year back, it was "+oldhund)

// ==========Q23
currentYear=new Date()
getUserdate=prompt("MM/d/yy")
userDate=new Date(getUserdate)
var diff=currentYear-userDate
var age=diff/(24*60*60*1000*365)
bdYear = currentYear.getFullYear()-age
console.log("Your birthday year: "+bdYear)
console.log("Your age is: "+age)
//=======Q24
// a)
var name=prompt();
// b)
var date= new Date()
var month=date.getMonth()
//c)
var unit=prompt()
//d)
var chargeUnit=prompt()
//e)
var netAmount=unit*chargeUnit
//f)
var dueDateCharge =500
//g)
var grossAmount = netAmount + dueDateCharge

console.log("Customer Name "+name)
console.log("Month "+month)
console.log("Number of Units: "+unit)
console.log("Charges per init: "+chargeUnit)
console.log("Net Amount Payable(eithin Due Date): "+netAmount)
console.log("Late payment surcharge: "+dueDateCharge)
console.log("Gross Amount payable(after Due Date): "+grossAmount)

