// let outCome;
// const rockBtn = document.querySelector(".rock");
// const paperBtn = document.querySelector(".paper");
// const scissorsBtn = document.querySelector(".scissors");
// const result = document.querySelector("#results");
// const cScore = document.querySelector(".cscore");
// const pScore = document.querySelector(".pscore");
// const finalResult = document.querySelector(".fscore");

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
    playerScore;
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

const game = function () {
  let rounds = 5;
  while (rounds > 0) {
    console.log(playRound(computerPlay(), computerPlay()));
    rounds--;
    console.log("computer: " + comScore);
    console.log("player: " + playerScore);
  }
};

rockBtn.addEventListener("click", function () {
  result.textContent = playRound(rockBtn.innerHTML, computerPlay());
  outCome = result.textContent;
  if (outCome === "you win!") {
    playerScore = playerScore + 1;
  } else if (outCome === "you lose!") {
    comScore = comScore + 1;
  }
  cScore.textContent = "Computer: " + comScore;
  pScore.textContent = "Player: " + playerScore;
  if (playerScore === 5 || comScore === 5) {
    if (playerScore > comScore) {
      finalResult.textContent = "You win!";
      playerScore = 0;
      comScore = 0;
    } else if (playerScore === comScore) {
      finalResult.textContent = "It's a tie!";
      playerScore = 0;
      comScore = 0;
    } else {
      finalResult.textContent = "You lose!";
      playerScore = 0;
      comScore = 0;
    }
  } else {
    finalResult.textContent = " ";
  }
});
paperBtn.addEventListener("click", function () {
  result.textContent = playRound(paperBtn.innerHTML, computerPlay());
  outCome = result.textContent;
  if (outCome === "you win!") {
    playerScore = playerScore + 1;
  } else if (outCome === "you lose!") {
    comScore = comScore + 1;
  }
  cScore.textContent = "Computer: " + comScore;
  pScore.textContent = "Player: " + playerScore;
  if (playerScore === 5 || comScore === 5) {
    if (playerScore > comScore) {
      finalResult.textContent = "You win!";
      playerScore = 0;
      comScore = 0;
    } else if (playerScore === comScore) {
      finalResult.textContent = "It's a tie!";
      playerScore = 0;
      comScore = 0;
    } else {
      finalResult.textContent = "You lose!";
      playerScore = 0;
      comScore = 0;
    }
  } else {
    finalResult.textContent = " ";
  }
});
scissorsBtn.addEventListener("click", function () {
  result.textContent = playRound(scissorsBtn.innerHTML, computerPlay());
  outCome = result.textContent;
  if (outCome === "you win!") {
    playerScore = playerScore + 1;
  } else if (outCome === "you lose!") {
    comScore = comScore + 1;
  }
  cScore.textContent = "Computer: " + comScore;
  pScore.textContent = "Player: " + playerScore;
  if (playerScore === 5 || comScore === 5) {
    if (playerScore > comScore) {
      finalResult.textContent = "You win!";
      playerScore = 0;
      comScore = 0;
    } else if (playerScore === comScore) {
      finalResult.textContent = "It's a tie!";
      playerScore = 0;
      comScore = 0;
    } else {
      finalResult.textContent = "You lose!";
      playerScore = 0;
      comScore = 0;
    }
  } else {
    finalResult.textContent = " ";
  }
});
