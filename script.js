`use strict`;

//Requirement 1: Check Input against Computer's
//Receive Player Input
//Generate computer response
//Check who wins

//Requirement 2: Win Condition
//Each round results in a point
//Whomever reaches 5 first, is announced the winnter

let playerScore = 0;
let computerScore = 0;


for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getMachineTurn());

  if(i === 4)
  {
    alert("The winner is: " + (playerScore > computerScore ? "Player! " : "Computer!"))
  }
}

function getHumanChoice() {
  let input = prompt("Enter Rock, Paper, or Scissors!").toLowerCase();

  return input;
}

function getMachineTurn() {
  let responses = ["rock", "paper", "scissors"];
  return responses[Math.floor(Math.random() * 4)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") playerScore++;
  else if (humanChoice === "paper" && computerChoice === "rock") playerScore++;
  else if (humanChoice === "scissors" && computerChoice === "paper")
    playerScore++;
  else if (humanChoice === computerChoice) console.log("It's a tie");
  else computerScore++;

  console.log("Computer Choice was: " + computerChoice);
  console.log(
    `Current Score is: \n Human: ${playerScore} \n Computer ${computerScore} `
  );

}
