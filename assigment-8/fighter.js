//Delay Function
function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}


var fighters = ["Ken", "Ryo", "Ehonda", "Dhalsim", "M Bison", "Jack", "Akuma"]

var userFighter = prompt("Select your figher")

if (fighters.includes(userFighter) === false) {
    alert("Invalid Selection") //Incase user select wrong fighter
} else {
    var systemFighter = fighters[Math.floor(Math.random() * fighters.length)] //random fighter selection for system
    console.log("**** Street Fighter ****")
    console.log("Fighting: " + userFighter + " vs " + systemFighter) //match start message
    sleepFor(3000)


    var userFighterInfo = {
        name: userFighter,
        health: 100
    }
    var systemFighterInfo = {
        name: systemFighter,
        health: 100
    }

    var moves = {
        punch: 10,
        kick: 15,
        jump: 0,
        specialmove: 30
    }

    //special moves chance
    var userSpecialMoveUsed = 1
    var systemSpecialMoveUsed = 1


    while (userFighterInfo.health > 0 && systemFighterInfo.health > 0)/* health condition loop */ {
        var userMove = prompt("Enter your move (punch, kick, jump, specialmove)") // move input from user
        console.log("Your move: " + userMove)

        //************ User Moves ***********
        if (userMove == "jump") /* incase user jump */ {
            console.log("Seystem Health: " + systemFighterInfo.health)
            console.log("*********************")
        } else if (userMove == "specialmove") {
            if (userSpecialMoveUsed === 1) {
                systemFighterInfo.health -= moves[userMove]
                console.log("Seystem Health: " + systemFighterInfo.health)
                console.log("*********************")

            } else {
                console.log("You have used Special Move before")
                console.log("Seystem Health: " + systemFighterInfo.health)
                console.log("*********************")
            }
            userSpecialMoveUsed = 0
        } else {
            systemFighterInfo.health -= moves[userMove]
            console.log("Seystem Health: " + systemFighterInfo.health)
            console.log("*********************")
        }

        //********** System Moves *****************
        var movesList = Object.keys(moves)
        var systemMove = movesList[Math.floor(Math.random() * movesList.length)]
        console.log("System move: " + systemMove)

        if (systemMove == "jump") {
            console.log("User Health: " + userFighterInfo.health)
            console.log("*********************")
        } else if (systemMove == "specialmove") {
            if (systemSpecialMoveUsed === 1) {
                userFighterInfo.health -= moves[userMove]
                console.log("User Health: " + userFighterInfo.health)
                console.log("*********************")

            } else {
                console.log("You have used Special Move before")
                console.log("User Health: " + userFighterInfo.health)
                console.log("*********************")
            }
            systemSpecialMoveUsed = 0
        } else {
            userFighterInfo.health -= moves[systemMove]
            console.log("User Health: " + userFighterInfo.health)
            console.log("*********************")
        }
    }


    // ************ Result Calculation ************
    if (systemFighterInfo.health > userFighterInfo.health) {
        console.log("============Final Results==============")
        console.log("Your Health is: " + userFighterInfo.health)
        console.log("System Health is: " + systemFighterInfo.health)
        console.log("Sorry! you loss. Please try again")
    } else {
        console.log("============Final Results==============")
        console.log("System Health is: " + systemFighterInfo.health)
        console.log("Your Health is: " + userFighterInfo.health)
        console.log("Woooooaaaa! Congratulations you WON the fight")
    }
}