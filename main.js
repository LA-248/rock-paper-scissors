// Defines initial score of player and computer
//

let playerScore = 0
let computerScore = 0

// Accessing elements from the DOM

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');
let roundResult = document.querySelector('#roundResult');
let finalResult = document.querySelector('#finalResult');
let userScore = document.querySelector('#userScore');
let compScore = document.querySelector('#compScore');

// Getting a reference to the container div that already exists in the HTML
const container = document.querySelector('.container');

// Creating a button to refresh the page
const newGame = document.createElement('button');
newGame.textContent = "Play Again";
newGame.setAttribute("id", "refresh");

// Function to refresh the page
function refreshPage() {
    window.location.reload(true);
}

// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ as the computer's selection.
function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

// This function plays a game of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = this.dataset.button;
    computerSelection = computerPlay();

    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {

        playerScore++;
        userScore.textContent = "Player score: " + playerScore;
        compScore.textContent = "Computer score: " + computerScore;
        roundResult.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";

        if (playerScore === 5) {
          roundResult.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
          finalResult.textContent = "Congratulations! You beat the computer!";
          rockButton.removeEventListener('click', playRound);
          paperButton.removeEventListener('click', playRound);
          scissorsButton.removeEventListener('click', playRound);
          container.appendChild(newGame);
        }

    } else if (playerSelection === computerSelection) {
        userScore.textContent = "Player score: " + playerScore;
        compScore.textContent = "Computer score: " + computerScore;
        roundResult.textContent = "You both chose " + playerSelection + "! " + "It's a tie!";

    } else {
        computerScore++;
        userScore.textContent = "Player score: " + playerScore;
        compScore.textContent = "Computer score: " + computerScore;
        roundResult.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";

        if (computerScore === 5) {
          roundResult.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
          finalResult.textContent = "The computer got the best of you! Better luck next time.";
          rockButton.removeEventListener('click', playRound);
          paperButton.removeEventListener('click', playRound);
          scissorsButton.removeEventListener('click', playRound);
          container.appendChild(newGame);
        }
    }
}

// Button event listener to play the game and register a selection
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

// Event listener to refresh the page on click of "Play Again" button
newGame.addEventListener('click', refreshPage);
