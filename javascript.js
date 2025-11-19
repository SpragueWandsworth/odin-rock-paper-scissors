
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
    console.log(result);
    return result;
}
getComputerChoice();

//prompt user
//get users input
//convert user input to lower case
//return player input

function getPlayerChoice() {
    let playerInput = prompt("Choose either rock, paper or scissors!").toLowerCase();
    console.log(playerInput);
    return playerInput
}

getPlayerChoice();

//get computer choice
//get human choice
//compare choices

function playRound(playerChoice, computerChoice) {
    console.log(playerChoice + computerChoice)
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

playRound(playerChoice, computerChoice);