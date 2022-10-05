
function getComputerChoice (){
    // Returns 0-2 (3 options)
    let ran = Math.floor(Math.random()*3);
    let output; 
    console.log(ran)  
    if (ran == 0){
         output = "Rock";
    } else if (ran == 1){
        output = "Paper";
    } else {
        output ="Scissors"
    }
    return output;
}