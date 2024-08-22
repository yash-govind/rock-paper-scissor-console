playerScore = 0;
computerScore = 0;

//get  random computer choice  choice
let getCompChoice = () => {
    let choice = Math.floor(Math.random() * 3); //get 3 random values from 1 to 3
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissor";
    }
    else {
        return "INVALID CHOICE";
    }
};
//test for above function.:  console.log(getCompChoice());
//get User choice from rock,paper and scissor
let getPlayerChoice = () => {
    let choice = parseInt(prompt(("Enter your choice (0,1,2): "))); //input
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissor";
    }
    else {
        return "INVALID CHOICE";
    }
};
//  test for above function :  console.log(getPlayerChoice()); //

//logic for rock paper scissor.

//function for player wins.
let playerWin = (computerChoice, playerChoice) => {
    if (computerChoice === "scissor" && playerChoice === "rock" || computerChoice === "paper" && playerChoice === "scissor" || computerChoice === "rock" && playerChoice === "paper") {
        console.log("Player Wins ");
        return true;
    }
    return false;
};
//function for game round.
let gameRound = (computerChoice, playerChoice) => {
    if (playerWin(computerChoice, playerChoice) == true) {
        playerScore++;
    }
    else if (computerChoice === playerChoice) {
        console.log("ITS A TIE ");

    }
    else {
        console.log("COMPUTER WINS  ");
        computerScore++;
    }
};

//function to play the game 5 times.
let playGame = () => {
    for (let i = 0; i < 5; i++) {
        const CompChoice = getCompChoice();
        const PlayerChoice = getPlayerChoice();
        gameRound(CompChoice, PlayerChoice);
    }
};

playGame();

console.log("Here are the Scores of Player : ", playerScore);
console.log("Here are the Scores of Computer  ", computerScore);