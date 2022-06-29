// Defines initial score of player and computer

let playerScore = 0
let computerScore = 0

// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ as the computer's selection.

function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

// This function plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection
// It will then return a string that declares the winner of the round like so: "You lose! Paper beats Rock".
// It will also increment the playerScore or computerScore by one (playerScore++ / computerScore++), depending on who won the round.

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++
        return "You win! " + playerSelection + " beats " + computerSelection + "!"
    
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++
        return "You win! " + playerSelection + " beats " + computerSelection + "!"
    
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++
        return "You win! " + playerSelection + " beats " + computerSelection + "!"

    } else if (playerSelection === computerSelection) {
        return "You both chose " + playerSelection + "! " + "It's a tie!"

    } else {
        computerScore++
        return "You lose! " + computerSelection + " beats " + playerSelection + "!"
    }
}

// This function plays a 5 round game by calling the playRound function inside of it. It then keeps score and reports a winner, loser, or tie at the end.

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose rock, paper, or scissors?")
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        
        console.log(playRound(playerSelection, computerSelection));
    }

    // if-else statement within the game() function that determines who is the winner of the 5 round game or if it was a tie.
    // It then logs the result to the console like so: "Result: You beat the computer! Congratulations!"

    if (playerScore > computerScore) {
        console.log("Result: You beat the computer! Congratulations!")
    
    } else if (computerScore > playerScore) {
        console.log("Result: You were bested by the computer! Better luck next time!")

    } else {
        console.log("Result: It's a tie!")
    }
}

game();