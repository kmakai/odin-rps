
        let playerScore = 0;
        let comScore = 0;
        let outCome;
        
        const choices = ['rock', 'paper', 'scissors'];
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

        function game() {

           // for (i = 0; i < 5; i++) {
                let x = prompt("rock paper or scissors?:");
                outCome = playRound(x, computerPlay());
                console.log(outCome);

                if(outCome === "you win!"){
                    playerScore = playerScore + 1;
                }else if(outCome === "you lose!"){
                    comScore = comScore + 1;
                }
                console.log(comScore);
                console.log(playerScore);

            }
       // }


        //let x = prompt("rock paper or scissors?:");
        //let y = computerPlay();

        //console.log(x);
        //console.log(y);

        game();
       // console.log(playRound(x,y))
       console.log("Final Scores");
       console.log("player: " + playerScore);
       console.log("Computer: " + comScore);

       if(playerScore > comScore){
           console.log("You win!")
       }else if(playerScore === comScore){
           console.log("It's a tie!");
       }else{
           console.log("You lose!");
       }
   