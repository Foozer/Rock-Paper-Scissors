//computerPlay()
function computerPlay() {
    //create random number to and assign to randomChoice-
    let randomChoice = Math.floor(Math.random() * 3 +1);
    let computerChoice = '';
    //This will be to select rock(1) paper(2) or scissors(3)
    if (randomChoice === 1) {
        computerChoice = 'rock';
    } else if (randomChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    //return computerChoice
    return computerChoice.toLowerCase();
}

//playerSelection()
//console asks for users choice and assings to playerChoice
//return playerChoice
function playerSelction() {
    let playerChoice = prompt("Rock, Paper or Scissors? ");
    return playerChoice.toLowerCase();
}

//playRound()

function playRound(playerChoice, computerChoice) {
    //If computerChoice = playerChoice then winner is a tie
    if (computerChoice === playerChoice) {
        return 'Tie';
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return 'Computer wins, rock beats scissors.';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        return 'Computer wins, paper beats rock.';
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return 'Computer wins, scissors beats paper.';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Player wins, rock beats scissors.';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Player wins, paper beats rock.';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player wins, scissors beats paper.';
    }  
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let result = '';
    let count = 0;
    let gaming = true;
    while (gaming) {
        result = (playRound(playerSelction(), computerPlay()));
        console.log(result);
        if (result[0] === 'C') {
            computerScore += 1;
        } else if ( result[0] === 'P') {
            playerScore += 1;  
        }  
        console.log(computerScore, playerScore)    ;
        count += 1;
        if (count >= 5){
            gaming = false;
        }
    }
    if (computerScore === playerScore) {
        console.log("Game is a tie!");
    } else if (computerScore >= playerScore) {
        console.log("The computer wins " + computerScore + " points to " + 
                    playerScore + " points!");
    } else {
        console.log("The player wins " + playerScore + " points to " + 
                    computerScore + " points!");
    }
}

game();
