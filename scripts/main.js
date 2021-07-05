let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button');
const scores = document.getElementById('scores');
const result = document.querySelector('#result');

buttons.forEach(button => { button.addEventListener('click', getPlayerChoice) });


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

function checkValidChoice(choice) {
    let validChoice = choice.toLowerCase();
    let valid = false;
    while (!valid) {
        if (validChoice === 'rock' || validChoice === 'paper' || validChoice === 'scissors') {
            valid = true;
            return validChoice;
        } else {
            validChoice = prompt("You must choice Rock, Paper or Scissors!").toLowerCase();
        }
    }
}

//playerSelection()
//console asks for users choice and assings to playerChoice
//return playerChoice
function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    console.log(e.target.id);
    playRound(playerSelection, computerPlay());
}

//playRound()

function playRound(playerChoice, computerChoice) {
    //If computerChoice = playerChoice then winner is a tie
    if (computerChoice === playerChoice) {
        //checkWinner();
        //return 'Tie';
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        computerScore ++;
        //checkWinner();
        //return 'Computer wins, rock beats scissors.';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        computerScore ++;
        //checkWinner();
        //return 'Computer wins, paper beats rock.';
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        computerScore ++;
        //checkWinner();
        //return 'Computer wins, scissors beats paper.';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore ++;
        //checkWinner();
        //return 'Player wins, rock beats scissors.';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore ++;
        //checkWinner();
        //return 'Player wins, paper beats rock.';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore ++;
        //checkWinner();
        //return 'Player wins, scissors beats paper.';
    }
    updateScoreBoard(playerScore,computerScore);
    checkWinner();  
}

function updateScoreBoard(pScore, cScore) {
    scores.textContent = `Player Score: ${pScore} - Computer Score: ${cScore}`;
}

function checkWinner() {
    if (playerScore == 5 || computerScore == 5) {
        let win = `${(computerScore > playerScore) ? 'computer wins' : 'player wins'}`;
        updateWinner(win);
    }
}

function updateWinner(winner) {
    console.log(winner);
    buttons.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
    });
}

function showResult(compScore, playScore) {
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