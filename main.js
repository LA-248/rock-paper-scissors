// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ as the computer's selection.

function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

// This function plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - 
// It will then return a string that declares the winner of the round like so: "You lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = ("You win! " + playerSelection + " beats " + computerSelection + "!");
    
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = ("You win! " + playerSelection + " beats " + computerSelection + "!");
    
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = ("You win! " + playerSelection + " beats " + computerSelection + "!");

    } else if (playerSelection === computerSelection) {
        result = ("You both chose " + playerSelection + "! " + "It's a tie!");

    } else {
        result = ("You lose! " + computerSelection + " beats " + playerSelection + "!");
    }

    return result;
}

let playerSelection = "Paper";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.