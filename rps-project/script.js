// random choice selection from computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomWholeNumber = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomWholeNumber];
  return randomChoice;
}

// participant variables
const PLAYER = "Player wins!";
const COMPUTER = "Computer wins!";
const TIE = "Tie!";

function playRound(player, computer) {
  if (player === "rock" && computer === "paper") {
    return COMPUTER;
  }
  if (player === "rock" && computer === "scissors") {
    return PLAYER;
  }
  if (player === "paper" && computer === "scissors") {
    return COMPUTER;
  }
  if (player === "paper" && computer === "rock") {
    return PLAYER;
  }
  if (player === "scissors" && computer === "rock") {
    return COMPUTER;
  }
  if (player === "scissors" && computer === "paper") {
    return PLAYER;
  }
  return TIE;
}

// score tracker variables
let playerScore = 0;
let computerScore = 0;
let play = 0;

function updateScore(roundWinner) {
  play++;
  const gameWinner = document.querySelector("#gameWinner");
  const userScore = document.querySelector("#userScore");
  const compScore = document.querySelector("#compScore");

  if (play >= 5) {
    if (playerScore > computerScore) {
      gameWinner.textContent = "You win!";
    } else if (computerScore > playerScore) {
      gameWinner.textContent = "Sorry, computer wins! Better luck next time!";
    } else {
      gameWinner.textContent = "You tie!";
    }
    return;
  }

  if (roundWinner === PLAYER) {
    playerScore++;
  }
  if (roundWinner === COMPUTER) {
    computerScore++;
  }
  userScore.textContent = `Player score: ${playerScore}`;
  compScore.textContent = `Computer score: ${computerScore}`;
}

//UI additions using DOM
//create 3 buttons in body
const body = document.querySelector("body");

const btn1 = document.createElement("button");
btn1.textContent = "rock";

const btn2 = document.createElement("button");
btn2.textContent = "paper";

const btn3 = document.createElement("button");
btn3.textContent = "scissors";

//create scoreboard
const userScore = document.createElement("h4");
userScore.id = "userScore";
userScore.textContent = "Player score: 0";

const compScore = document.createElement("h4");
compScore.id = "compScore";
compScore.textContent = "Computer score: 0";

const gameWinner = document.createElement("h1");
gameWinner.id = "gameWinner";
gameWinner.textContent = "";

//create event listeners for btns
btn1.addEventListener("click", function (e) {
  const playerSelection = e.target.innerText;
  const compSelection = getComputerChoice();
  const singleRoundWinner = playRound(playerSelection, compSelection);
  updateScore(singleRoundWinner);
});

btn2.addEventListener("click", function (e) {
  const playerSelection = e.target.innterText;
  const compSelection = getComputerChoice();
  const singleRoundWinner = playRound(playerSelection, compSelection);
  updateScore(singleRoundWinner);
});

btn3.addEventListener("click", function (e) {
  const playerSelection = e.target.innterText;
  const compSelection = getComputerChoice();
  const singleRoundWinner = playRound(playerSelection, compSelection);
  updateScore(singleRoundWinner);
});

//append changes
body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(btn3);
body.appendChild(userScore);
body.appendChild(compScore);
body.appendChild(gameWinner);
