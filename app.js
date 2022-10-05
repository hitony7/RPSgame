
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

function game(){
    for
}