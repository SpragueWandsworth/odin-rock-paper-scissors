
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

//UI

const buttons = document.querySelector('.Buttons');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

rockButton.textContent = 'Rock'
paperButton.textContent = 'Paper'
scissorsButton.textContent = 'Scissors'

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);

rockButton.addEventListener('click', () => playRound('rock'))
paperButton.addEventListener('click', () => playRound('paper'))
scissorsButton.addEventListener('click', () => playRound('scissors'))

//playGame();

//get random number between 0 and 1
//choose either rock, paper or scissors based on that number to result
//return result

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result = undefined;

    if (randomNumber === 0) {
        result = "rock";
    }
    else if (randomNumber === 1) {
        result = "paper";
    }
    else if (randomNumber === 2) {
        result = "scissors";
    }
    console.log("computer picked " + result);
    return result;
}

//prompt user
//get users input
//convert user input to lower case
//return player input

function getPlayerChoice(playerInput) {
    //let playerInput = prompt("Choose either rock, paper or scissors!").toLowerCase();
    console.log("player picked " + playerInput);
    return playerInput;
}

//get computer choice
//get human choice
//compare choices
//assign winner
//increase rounds played

function getWinner(userChoice, computerChoice) {
    let winner = undefined;

        if (userChoice === computerChoice) {
            winner = "draw";
        }
        if (computerChoice === "rock" ) {
            if (userChoice === "scissors"){winner = "computer"}
            else if (userChoice === "paper"){winner = "player"};
        }
        else if (computerChoice === "paper" ) {
            if (userChoice === "rock"){winner = "computer"}
            else if (userChoice === "scissors"){winner = "player"};
        }
        else if (computerChoice === "scissors" ) {
            if (userChoice === "paper"){winner = "computer"}
            else if (userChoice === "rock"){winner = "player"};
        }

        roundsPlayed++;
        console.log(roundsPlayed + " rounds played.");
        return winner;
}

//get players choice
//get computers choice
//get the winner
//increase the winners points
//log the new score

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    //const playerChoice = getPlayerChoice();

    let winner = getWinner(playerChoice, computerChoice);
    winner;

    if (winner === "player") {
            playerScore++;
        }
        else if (winner === "computer") {
            computerScore++;
        }
    console.log("player picked " + playerChoice);
    console.log("the score is now " + playerScore + " to player, and " + computerScore + " to the computer.");
}

//if less than 5 rounds have been played, play round
//log final result

function playGame() {
    let totalRounds = 5;
    playRound();
    
    if (playerScore > computerScore) {
        console.log("You won the game!")
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game!")
    }
    else {
        console.log("The game was a draw.")
    }

}

