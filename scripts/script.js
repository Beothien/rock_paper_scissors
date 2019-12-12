let userScore = 0;
let computerScore = 0;
let gameOver = false;

function computerPlay() {
    // Return a random between 0 and 2
    let choice = Math.floor(Math.random() *3);
    switch (choice) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      default:
        return 'scissors';

    }
  
}
// Simulate a single round and establish the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection + "|" + computerSelection) {
        case 'paper|rock':
        case 'rock|scissors':
        case 'scissors|paper':
            userScore++;
            return "win";
        case 'paper|paper':
        case 'rock|rock':
        case 'scissors|scissors':
            return "draw";
        case 'paper|scissors':
        case 'rock|paper':
        case 'scissors|rock':
            computerScore++;
            return "lose";
    }
}
// Display the description of a single round results
function diplayResult(outcome, playerSelection, computerSelection) {
    switch(outcome) {
        case 'win':
            document.getElementById("description").innerHTML = "Your" + playerSelection + " beats my " + computerSelection + " ...";
            break;
        case 'draw':
            document.getElementById("description").innerHTML = "It's draw! We both choose " + playerSelection;
            break;
        case 'lose':
            document.getElementById("description").innerHTML = "My" + computerSelection + " beats your " + playerSelection + " ...";
    }
}
// Update the score displayed after one game
function updateScore() {
    document.getElementById("score").innerHTML = userScore + ":" + computerScore;
}

function scoreCheck() {
    if (!(userScore < 3 && computerScore < 3)) { 
        if (userScore > computerScore) {
            document.getElementById("description").innerHTML = "You've won!";
        } else {
            document.getElementById("description").innerHTML = "You've lost!";
        } return true;
    } else { 
        return false;
    }
 }
 function reset() {
	gameOver = false;
    userScore = 0;
	computerScore = 0;
	score();
    document.getElementById("description").innerHTML = "Game reset";
 }


function game(playerSelection) {
    if (gameOver === false) {
        const computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        diplayResult(outcome, playerSelection, computerSelection);
        updateScore();
        gameOver = scoreCheck();
    } else {
        //prompt user to reset
    }
}