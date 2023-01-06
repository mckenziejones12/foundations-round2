let playerSelection = prompt("Rock, Paper, or Scissors?");
let lowerCasePlayerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

//random choice selection from computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomWholeNumber = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomWholeNumber];
  return randomChoice;
}

//play interactive round with player and computer
function playRound(player, computer) {
  if (player === "rock" && computer === "paper") {
    return "Computer wins! Paper beats rock!";
  }
  if (player === "rock" && computer === "scissors") {
    return "You win! Rock beats scissors!";
  }
  if (player === "paper" && computer === "scissors") {
    return "Computer wins! Scissors beat paper!";
  }
  if (player === "paper" && computer === "rock") {
    return "You win! Paper beats rock!";
  }
  if (player === "scissors" && computer === "rock") {
    return "Computer wins! Rock beats scissors!";
  }
  if (player === "scissors" && computer === "paper") {
    return "You win! Scissors beat paper!";
  }
  return "You tie!";
}

console.log("round: ", playRound(lowerCasePlayerSelection, computerSelection));
console.log("player selection: ", lowerCasePlayerSelection);
console.log("computer selection: ", computerSelection);
