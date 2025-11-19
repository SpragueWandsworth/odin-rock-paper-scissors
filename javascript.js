
//get random number between 0 and 1
//choose either rock, paper or scissors based on that number to result
//return result

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    let result = undefined;

    if (randomNumber >= 0 && randomNumber < 0.34) {
        result = "rock";
    }
    else if (randomNumber >= 0.34 && randomNumber < 0.67) {
        result = "paper";
    }
    else if (randomNumber >= 0.67 && randomNumber <=1) {
        result = "scissors";
    }
    console.log("computer picked " + result);
    return result;
}

//prompt user
//get users input
//convert user input to lower case
//return player input

function getPlayerChoice() {
    let playerInput = prompt("Choose either rock, paper or scissors!").toLowerCase();
    console.log("player picked " + playerInput);
    return playerInput;
}

//get computer choice
//get human choice
//compare choices
//assign winner
//add one point to the winner

function playRound(userChoice, computerChoice) {
    let winner = undefined;
        if (computerChoice === "rock" ) {
            if (userChoice === "rock"){winner = "draw"}
            else if (userChoice === "scissors"){winner = "computer"}
            else if (userChoice === "paper"){winner = "player"};
        }
        else if (computerChoice === "paper" ) {
            if (userChoice === "paper"){winner = "draw"}
            else if (userChoice === "rock"){winner = "computer"}
            else if (userChoice === "scissors"){winner = "player"};
        }
        else if (computerChoice === "scissors" ) {
            if (userChoice === "scissors"){winner = "draw"}
            else if (userChoice === "paper"){winner = "computer"}
            else if (userChoice === "rock"){winner = "player"};
        }

        if (winner === "player") {
            playerScore += 1;
        }
        else if (winner === "computer") {
            computerScore += 1;
        }

        console.log(winner + " won the game.");
        console.log("the score is now " + playerScore + " to player, and " + computerScore + " to the computer.")
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

playRound(playerChoice, computerChoice);

getComputerChoice();
getPlayerChoice();
