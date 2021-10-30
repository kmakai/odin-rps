
let playerScore = 0;
let comScore = 0;
let outCome;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const choices = ['rock', 'paper', 'scissors'];
const result = document.querySelector("#results");
const cScore = document.querySelector(".cscore");
const pScore = document.querySelector(".pscore");
const finalResult = document.querySelector(".fscore");

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase();

    if (selection === "rock" && computerSelection === "scissors") {
        return "you win!";
    } else if (selection === "paper" && computerSelection === "rock") {
        return "you win!";
    } else if (selection === "scissors" && computerSelection === "paper") {
        return "you win!";
    } else if (selection === computerSelection) {
        return "It's a tie!";
    } else {
        return "you lose!";
    }
}





rockBtn.addEventListener('click', function () {
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
paperBtn.addEventListener('click', function () {
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
scissorsBtn.addEventListener('click', function () {
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



