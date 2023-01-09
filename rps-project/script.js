// random choice selection from computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomWholeNumber = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomWholeNumber];
  return randomChoice;
}

// participant variables
const USER = "Player wins!";
const COMPUTER = "Computer wins!";
const TIE = "Tie!";

// play interactive round with player and computer
function playRound(player, computer) {
  if (player === "rock" && computer === "paper") {
    return COMPUTER;
  }
  if (player === "rock" && computer === "scissors") {
    return USER;
  }
  if (player === "paper" && computer === "scissors") {
    return COMPUTER;
  }
  if (player === "paper" && computer === "rock") {
    return USER;
  }
  if (player === "scissors" && computer === "rock") {
    return COMPUTER;
  }
  if (player === "scissors" && computer === "paper") {
    return USER;
  }
  return TIE;
}

// score tracker variables
let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    const winner = playRound(lowerCasePlayerSelection, computerSelection);

    console.log("Player Selection: ", lowerCasePlayerSelection);
    console.log("Computer Selection: ", computerSelection);
    console.log("Winner: ", winner);
    // make a new line
    console.log("\n");

    updateScore(winner);
  }
}

// a function that determines final winner of game
function whoWon(playerWins, computerWins) {
  if (playerWins > computerWins) {
    return "Congrats! You win!";
  }
  return "Sorry, you lose. Better luck next time!";
}

function updateScore(roundWinner) {
  if (roundWinner === USER) {
    playerScore++;
  }
  if (roundWinner === COMPUTER) {
    computerScore++;
  }
}

// Play the game
game();

const finalWinner = whoWon(playerScore, computerScore);

console.log(finalWinner);
