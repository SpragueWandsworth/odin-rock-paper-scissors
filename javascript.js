
//get random number between 0 and 1
//choose apply either rock, paper or scissors based on that number to result

function getComputerChoice() {
    let randomNumber = Math.random()
    let result = undefined

    if (randomNumber >= 0 && randomNumber < 0.34) {
        result = "Rock"
    }
    else if (randomNumber >= 0.34 && randomNumber < 0.67) {
        result = "Paper"
    }
    else if (randomNumber >= 0.67 && randomNumber <=1) {
        result = "Scissors"
    }
    console.log(result)
}

getComputerChoice()
