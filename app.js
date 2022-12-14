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
    //show Reset state button
    if (isGameover){
        console.log("entered");
        const container = document.querySelector('#reset');
        const button = document.createElement('button');
        button.classList.add('resetBut')
        button.textContent = "Reset";
        container.appendChild(button);

        button.addEventListener('click', () => {
                console.log("Reset");
                playerScore = 0;
                computerScore = 0;
                setscore(0,0);
                isGameover = false;
                container.removeChild(button);
                const content = document.querySelector('#container .content');
                content.textContent = "";

        });
    }
}

function setscore(player,computer){

        const playerScoreEle = document.querySelector('#player h3');
        playerScoreEle.textContent = player;

        const computerScoreEle = document.querySelector('#computer h3');
        computerScoreEle.textContent = computer;

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

