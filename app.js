
function getComputerChoice (){
    // Returns 0-2 (3 options)
    let ran = Math.floor(Math.random()*3);
    let output; 
    if (ran == 0){
         output = "Rock";
    } else if (ran == 1){
        output = "Paper";
    } else {
        output ="Scissors"
    }
    return output;
}

function playSingleRound (playerSelection, ComputerChoice){
    //use .toLowerCase() for caps insentive
    playerSelection = playerSelection.toLowerCase();
    ComputerChoice = ComputerChoice.toLowerCase();
    let output;
    if (playerSelection == ComputerChoice) {
        output = "It's a Tie!";
    } else if (playerSelection == "rock" && ComputerChoice == "scissors"  ||
               playerSelection == "scissors" && ComputerChoice == "paper" ||
               playerSelection == "paper" && ComputerChoice == "rock" ){
        output = "Player Wins! " + playerSelection + " beats " + ComputerChoice + ".";    
    } else {
        output = "Computer Wins! " + ComputerChoice + " beats " + playerSelection  + ".";
    }
    return output;
}

const btnRock = document.querySelector('#btnRock');
btn.addEventListener('click', () => {
  playSingleRound("Rock",getComputerChoice());
});

const btnPaper = document.querySelector('#btnPaper');
btn.addEventListener('click', () => {
  playSingleRound("Paper", getComputerChoice());
});

const btnScissors = document.querySelector('#btnScissors');
btn.addEventListener('click', () => {
  playSingleRound("Scissors",getComputerChoice());
});

function game(){
    let playerScore = 0;
    let computerScore = 0;
    //play atleast 5 Rounds first to 3
    for (let i =0; i < 5;i++) {
        console.log("Rock, Paper or,Scissors?")
        let playerSelection = prompt();
        let output = playSingleRound(playerSelection, getComputerChoice());
        if (output.charAt(0) == "P"){
            //If player wins
            playerScore++;
        } else if (output.charAt(0) == "C"){
            //If player loses
            computerScore++;
        } else {
            //TIE add another round of playing
            i--;
        }
        console.log("Player score:" + playerScore + "|  Computer Score: " + computerScore)
    }
    if (playerScore > computerScore){
        console.log("Player Wins the Series!")
    } else {
        console.log("Computer Wins the Series!")
    }
}