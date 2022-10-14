//Debug parameter
let Debug = true;

//Globalvar
let playerScore = 0;
let computerScore = 0;
let isGameover = false;

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
        updateScore("player");   
    } else {
        output = "Computer Wins! " + ComputerChoice + " beats " + playerSelection  + ".";
        updateScore("computer");     
    }
    if (Debug){
        console.log(output);
    }

    return output;

}

function updateScore(playerObject){
    if (playerObject == "player") {
        playerScore++;
        const playerScoreEle = document.querySelector('#player h3');
        playerScoreEle.textContent = playerScore;

    } else if (playerObject == "computer") {
        computerScore++;
        const computerScoreEle = document.querySelector('#computer h3');
        computerScoreEle.textContent = computerScore;
    }

}

function gamecheck(){
    console.log(playerScore, computerScore);
    if (playerScore >= 5){
        const content = document.querySelector('#container .content');
        content.textContent = "Player Wins the Series!";  
        container.appendChild(content);
        isGameover = true;
    } else if (computerScore >= 5){
        const content = document.querySelector('#container .content');
        content.textContent = "Computer Wins the Series!";
        container.appendChild(content);
        isGameover = true;
    }
}


//Result Div
function showResultDiv(input){
    const content = document.querySelector('#container .content');

    content.textContent = input;

    container.appendChild(content);
    gamecheck();
}


const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
  if(!isGameover){
    showResultDiv(playSingleRound("Rock",getComputerChoice()));
  }
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    if(!isGameover){
        showResultDiv(playSingleRound("Paper", getComputerChoice()));
    }
});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
    if(!isGameover){
        showResultDiv(playSingleRound("Scissors",getComputerChoice()));
    }
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