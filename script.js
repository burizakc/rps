function computerChoice() {
  choices = [`Rock`, `Paper`, `Scissors`];
  return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}
let computerResult = computerChoice();
let userChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
console.log(userChoice);

function playGame() {
  if (userChoice == "rock" && computerResult == "paper") {
    return "You lose!";
  } else if (userChoice == "paper" && computerResult == "scissors") {
    return "You Lose!";
  } else if (userChoice == "scissors" && computerResult == "rock") {
    return "You lose!";
  } else if (userChoice == computerResult) {
    return "Its a tie!";
  } else {
    return "You win!";
  }
}
console.log(`The computer chose ${computerResult}!`);
console.log(playGame());
