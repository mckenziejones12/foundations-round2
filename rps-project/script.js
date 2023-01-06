function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomWholeNumber = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomWholeNumber];
  return randomChoice;
}
