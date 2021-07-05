let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button');
const scores = document.getElementById('scores');
const result = document.getElementById('results');

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
    playRound(playerSelection, computerPlay());
}

//playRound()

function playRound(playerChoice, computerChoice) {
    //If computerChoice = playerChoice then winner is a tie
    if (computerChoice === playerChoice) {
        result.textContent = `This round is a tie, you both picked ${computerChoice}`;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        computerScore ++;
        result.textContent = `Computer wins, rock beats scissors.`;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        computerScore ++;
        result.textContent = `Computer wins, paper beats rock.`;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        computerScore ++;
        result.textContent = `Computer wins, scissors beats paper.`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore ++;
        result.textContent = `Player wins, rock beats scissors.`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore ++;
        result.textContent = `Player wins, paper beats rock.`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore ++;
        result.textContent = `Player wins, scissors beats paper.`;
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
        showResult();
    }
}

function updateWinner(winner) {
    buttons.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
    });
}

function showResult() {
    if (computerScore >= playerScore) {
        result.textContent = `The computer wins ${computerScore} points to ${playerScore} points`;
    } else {
        result.textContent = `The player wins ${playerScore} points to ${computerScore} points`;
    }
}