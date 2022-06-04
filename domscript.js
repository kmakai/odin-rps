"use strict";
const rockBtn = document.querySelector(".rock-img");
const paperBtn = document.querySelector(".paper-img");
const scissorsBtn = document.querySelector(".scissors-img");

//update scores
const playerScoreEl = document.querySelector(".player-score-number");
const computerScoreEl = document.querySelector(".computer-score-number");

const updatScores = function () {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = comScore;
};

const checkWinner = function () {
  if (playerScore === 5 || comScore === 5) {
    if (playerScore > comScore)
      document.querySelector(".winner").textContent = "PLAYER WINS!!!";
    if (comScore > playerScore)
      document.querySelector(".winner").textContent = "COMPUTER WINS!!!";
    playerScore = 0;
    comScore = 0;
    document.querySelector(".player-choice-img").src = "";
    document.querySelector(".computer-choice-img").src = "";
    updatScores();
  }
};

rockBtn.addEventListener("click", () => {
  document.querySelector(".winner").textContent = "";
  let computerHand = computerPlay();
  document.querySelector(".player-choice-img").src = `rock.png`;
  document.querySelector(".computer-choice-img").src = `${computerHand}.png`;
  playRound("rock", computerHand);
  updatScores();
  checkWinner();
});

paperBtn.addEventListener("click", () => {
  // console.log(choices[rockBtn.id]);
  document.querySelector(".winner").textContent = "";

  let computerHand = computerPlay();
  document.querySelector(".player-choice-img").src = `paper.png`;
  document.querySelector(".computer-choice-img").src = `${computerHand}.png`;
  playRound("paper", computerHand);
  updatScores();
  checkWinner();
});

scissorsBtn.addEventListener("click", () => {
  // console.log(choices[rockBtn.id]);
  document.querySelector(".winner").textContent = "";

  let computerHand = computerPlay();
  document.querySelector(".player-choice-img").src = `scissors.png`;
  document.querySelector(".computer-choice-img").src = `${computerHand}.png`;
  playRound("scissors", computerHand);
  updatScores();
  checkWinner();
});
