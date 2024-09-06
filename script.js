



playerScore = 0;
computerScore = 0;
//get  random computer choice  choice
let getCompChoice = () => {
    //get 3 random values from 1 to 3
    const computerChoiceArr = ["rock","paper","scissor"];
    let getChoice = computerChoiceArr[Math.floor(Math.random() * computerChoiceArr.length)];
    return getChoice;
};

//logic for rock paper scissor.

//function for player wins.
let playerWin = (computerChoice, playerChoice) => {
    if (computerChoice === "scissor" && playerChoice === "rock" || computerChoice === "paper" && playerChoice === "scissor" || computerChoice === "rock" && playerChoice === "paper") {
        return true;
    }
    return false;
};
//function for game round.
let gameRound = (computerChoice, playerChoice) => {
    if (playerWin(computerChoice, playerChoice) === true) {
        playerScore++;
        displayResultText("PLAYER WINS THE ROUND ")
    }
    else if (computerChoice === playerChoice) {
        displayResultText("ITS A TIE ");

    }
    else {
        computerScore++;
        displayResultText("COMPUTER WINS  ");
        
    }
    updateScore();
};
//dom.
const resultText = document.querySelector('#result-text');
let displayResultText = (message)=>{
    resultText.innerHTML = `<h2>${message}</h2>`
}


//score updation via dom and text display  to show the score for each round 
let updateScore = ()=>{
   document.querySelector('#player-score').innerHTML = playerScore;
   document.querySelector('#computer-score').innerHTML = computerScore;
   //first to reach 5 points , wins the game .
   if (playerScore === 5) {
    displayResultText("Player Wins the Game!");
    disableButtons();
} else if (computerScore === 5) {
    displayResultText("Computer Wins the Game!");
    disableButtons();
}
}

// to disable buttons after the match has been won.
let disableButtons = ()=>{
    document.querySelectorAll('button').forEach(button => {
        button.disabled()=true;
    });
}

//dom and events to select the r,p,s buttons on click ;

document.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click',()=>playGame(button.id))
})


// to play the game ,get computer choice,get player choice and 

let playGame = (playerChoice) =>{
   document.querySelector('#player-choice').innerHTML = playerChoice;
  let computerChoice = getCompChoice();
  
document.querySelector('#computer-choice ').innerHTML = computerChoice;
  gameRound(computerChoice,playerChoice);
  updateScore();
}



document.addEventListener("DOMContentLoaded", () => {
    const apiCall = axios.get("https://api.thecatapi.com/v1/images/search");

    const callback = (res) => {
        var img = res.data[0].url;
        document.getElementById("cat").innerHTML = `
        <p class="cat-title">Here's a Random Cat for you</p>
        <img class="cat-image" src="${img}" alt="cat" >
        `;
    };

    apiCall.then(callback);
});



