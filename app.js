var playerScore = 0;
var computerScore = 0;
var playerRoll = 0;
var computerRoll = 0;

var playerTotal = document.getElementById("ps")
var computerTotal = document.getElementById("cs")

function onClickChoice(input){
    playerRoll = input;
    gameLogic()
}

function battleOutcome(result){
    if (result == 1){
        playerScore++
        playerTotal.textContent = playerScore
    } 
    else if (result == 2){
        computerScore++
        computerTotal.textContent = computerScore
    }
    console.log(playerScore)
    console.log(computerScore)
}

function gameLogic(){
    //randomly select rock, paper, scissors for computer
    computerRoll = Math.floor(Math.random() * 3 + 1)
    var outcome = document.getElementById("outcomeHeading")

    switch (playerRoll){
        case 1: //player rock
        switch (computerRoll){
            case 1: 
            outcome.textContent = "Rock v Rock, Draw!"
            break;
            case 2: 
            outcome.textContent = "Rock v Paper, Computer wins!"
            battleOutcome(2)
            break;
            case 3: 
            outcome.textContent = "Rock v Scissors, Player wins!"
            battleOutcome(1)
            break;
        }
        break;

        case 2: //player paper
        switch (computerRoll){
            case 1: 
            outcome.textContent ="Paper v Rock, Player wins!"
            battleOutcome(1)
            break;
            case 2: 
            outcome.textContent ="Paper v Paper, Draw!"
            break;
            case 3: 
            outcome.textContent ="Paper v Scissors, Computer wins!"
            battleOutcome(2)
            break;
        }
        break;

        case 3: //player scissors
        switch (computerRoll){
            case 1: outcome.textContent = "Scissors v Rock, Computer wins!" 
            battleOutcome(2)
            break;
            case 2: outcome.textContent = "Scissors v Paper, Player wins!"
            battleOutcome(1)
            break;
            case 3: outcome.textContent = "Scissors v Scissors, Draw!"
            break;
        }
        break;
    }

    


}