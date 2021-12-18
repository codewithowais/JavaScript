function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

var numOvers = +prompt("Enter Number of Overs")
var teamA = prompt("Enter name of Team A")
var teamB = prompt("Enter name of Team B")

alert("The match is between " + teamA + " & " + teamB)
sleepFor(1000)

var toss = +prompt("Enter 0 or 1 for TeamA")
var coinToss = Math.floor(Math.random() * 2)
var selectedTeam
var tossLoss

if (coinToss === toss) {
    alert("Wow! " + teamA + " is bating first")
    selectedTeam = teamA
    tossLoss = teamB
} else {
    alert("Ooh! " + teamB + " is bating first")
    selectedTeam = teamB
    tossLoss = teamA
}
sleepFor(3000)

alert(numOvers + " Overs match is started, " + selectedTeam + " is to bat")
sleepFor(2000)


var totalScoreInning01 = 0
var totalOutInning01 = 0
for (var over = 1; over <= numOvers; over++) {
    alert("Over# " + over + " started")
    var out = 0
    var score = 0
    for (var ball = 1; ball <= 6; ball++) {

        var run = Math.floor(Math.random() * 7)
        if (run === 0) {
            alert("You Score " + run + " Its Out")
            out = out + 1
            sleepFor(2000)
        } else if (run === 4 || run === 6) {
            alert("Wooaww! You score: " + run)
            score = score + run
            sleepFor(1000)
        } else {
            alert("You score: " + run)
            score = score + run
            sleepFor(1000)
        }
    }
    totalOutInning01 += out
    totalScoreInning01 += score
    alert("Score: " + score + "/" + out)
}

alert(selectedTeam + " has scored: " + totalScoreInning01 + "/" + totalOutInning01)
sleepFor(2000)

alert(numOvers + " Overs match is started, " + tossLoss + " is to bat")
sleepFor(2000)


var totalScoreInning02 = 0
var totalOutInning02 = 0
for (var over = 1; over <= numOvers; over++) {
    alert("Over# " + over + " started")
    var out = 0
    var score = 0
    for (var ball = 1; ball <= 6; ball++) {

        var run = Math.floor(Math.random() * 7)
        if (run === 0) {
            alert("You Score " + run + " Its Out")
            out = out + 1
            sleepFor(2000)
        } else if (run === 4 || run === 6) {
            alert("Wooaww! You score: " + run)
            score = score + run
            sleepFor(1000)
        } else {
            alert("You score: " + run)
            score = score + run
            sleepFor(1000)
        }
    }
    totalOutInning02 += out
    totalScoreInning02 += score
    alert("Score: " + totalScoreInning02 + "/" + totalOutInning02)
}


if (totalScoreInning01 > totalScoreInning02) {
    alert("Congratulations! " + selectedTeam + " has won the match")
} else if (totalScoreInning02 > totalScoreInning01) {
    alert("Congratulations! " + tossLoss + " has won the match")
} else if (totalScoreInning01 === totalScoreInning02) {
    alert("Ooh match tie!!!")
}