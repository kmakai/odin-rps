"use strict";

const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let comScore = 0;

function computerPlay() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  let selection = playerSelection.toLowerCase();
  console.log("computer: " + computerSelection);
  console.log("player: " + playerSelection);

  if (selection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "you win!";
  } else if (selection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "you win!";
  } else if (selection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "you win!";
  } else if (selection === computerSelection) {
    return "It's a tie!";
  } else {
    comScore++;
    return "you lose!";
  }
}

//prompt("Rock, Paper or scissors?:")
const game = function () {
  let rounds = 0;
  while (playerScore !== 5 && comScore !== 5) {
    console.log(`round: ${rounds++}`);
    console.log(playRound(computerPlay(), computerPlay()));
    console.log("computer score: " + comScore);
    console.log("player score: " + playerScore);
    console.log("-------------------------");
    // rounds--;
  }
};
