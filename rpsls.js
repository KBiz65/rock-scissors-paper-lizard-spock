//global variables
const userVictims = [];
const computerVictims = [];
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

const winnerDisplay = document.getElementById("who-wins-text");
const userImageContainer = document.getElementById("userChoiceImage");
const compImageContainer = document.getElementById("computerChoiceImage");

setupGame();

function setupGame() {
  const userWeaponOptions = document.getElementById("weapons");
  for (let i = 0; i < userWeaponOptions.children.length; i++) {
    let weapon = userWeaponOptions.children[i];
    weapon.addEventListener("click", function (e) {
    userChoice = e.target.id;
    whoWins(userChoice);
    });
  }
}

function whoWins(userChoice) {
  const computerChoice = computerChooses();

//if user wins
  if (userChoice === "scissors" && computerChoice === "paper") {
    whenUserWinsDisplay("Scissors Cuts Paper!");
  }

  if (userChoice === "paper" && computerChoice === "rock") {
    whenUserWinsDisplay("Paper Covers Rock!");
  }

  if (userChoice === "rock" && computerChoice === "lizard") {
    whenUserWinsDisplay("Rock Crushes Lizard!");
  }

  if (userChoice === "lizard" && computerChoice === "spock") {
    whenUserWinsDisplay("Lizard Poisons Spock!");
  }

  if (userChoice === "spock" && computerChoice === "scissors") {
    whenUserWinsDisplay("Spock Smashes Scissors!");
  }

  if (userChoice === "scissors" && computerChoice === "lizard") {
    whenUserWinsDisplay("Scissors Decapitates Lizard!");
  }

  if (userChoice === "lizard" && computerChoice === "paper") {
    whenUserWinsDisplay("Lizard Eats Paper!");
  }

  if (userChoice === "paper" && computerChoice === "spock") {
    whenUserWinsDisplay("Paper Disproves Spock!");
  }

  if (userChoice === "spock" && computerChoice === "rock") {
    whenUserWinsDisplay("Spock Vaporizes Rock!");
  }

  if (userChoice === "rock" && computerChoice === "scissors") {
    whenUserWinsDisplay("Rock Crushes Scissors!");
  }

//if computer wins
  if (computerChoice === "scissors" && userChoice === "paper") {
    whenComputerWinsDisplay("Scissors Cuts Paper!");
  }

  if (computerChoice === "paper" && userChoice === "rock") {
    whenComputerWinsDisplay("Paper Covers Rock!");
  }

  if (computerChoice === "rock" && userChoice === "lizard") {
    whenComputerWinsDisplay("Rock Crushes Lizard!");
  }

  if (computerChoice === "lizard" && userChoice === "spock") {
    whenComputerWinsDisplay("Lizard Poisons Spock!");
  }

  if (computerChoice === "spock" && userChoice === "scissors") {
    whenComputerWinsDisplay("Spock Smashes Scissors!");
  }

  if (computerChoice === "scissors" && userChoice === "lizard") {
    whenComputerWinsDisplay("Scissors Decapitates Lizard!");
  }

  if (computerChoice === "lizard" && userChoice === "paper") {
    whenComputerWinsDisplay("Lizard Eats Paper!");
  }

  if (computerChoice === "paper" && userChoice === "spock") {
    whenComputerWinsDisplay("Paper Disproves Spock!");
  }

  if (computerChoice === "spock" && userChoice === "rock") {
    whenComputerWinsDisplay("Spock Vaporizes Rock!");
  }

  if (computerChoice === "rock" && userChoice === "scissors") {
    whenComputerWinsDisplay("Rock Crushes Scissors!");
  }
  
  displayImageChoices(userChoice, computerChoice);

  if (computerChoice === userChoice) {
    tieScore++;
    winnerDisplay.textContent = "It's a tie!"
    userImageContainer.style.border = "5px solid blue"
    compImageContainer.style.border = "5px solid blue"
    updateScores();
    return 0;
  }
  
  for (i = 0; i < computerVictims.length; i++) {
    if (computerVictims[i].victim === userChoice) {
      computerScore++
      winnerDisplay.textContent = ("Computer wins: " + computerVictims[i].statement)
      userImageContainer.style.border = "5px solid red"
      compImageContainer.style.border = "5px solid green"
      updateScores();
      return 0;
    }
  }
}

function computerChooses() {
  const weapons = ["scissors", "paper", "rock", "lizard", "spock"];
  return weapons[Math.floor(Math.random() * 5)];
}

function whenUserWinsDisplay(victoryText) {
  userScore += 1;
  winnerDisplay.textContent = ("You win: " + victoryText);
  userImageContainer.style.border = "5px solid green";
  compImageContainer.style.border = "5px solid red";
  updateScores();
}

function whenComputerWinsDisplay(victoryText) {
  computerScore++
  winnerDisplay.textContent = ("Computer wins: " + victoryText)
  userImageContainer.style.border = "5px solid red"
  compImageContainer.style.border = "5px solid green"
  updateScores(); 
}

function displayImageChoices(userChoice, computerChoice) {
  const userWeapon = document.getElementById(userChoice).cloneNode();
  const computerWeapon = document.getElementById(computerChoice).cloneNode();
  
  if (userImageContainer.firstChild) {
    userImageContainer.firstChild.remove();
  }

  if (compImageContainer.firstChild) {
    compImageContainer.firstChild.remove();
  }

  userImageContainer.appendChild(userWeapon); 
  compImageContainer.appendChild(computerWeapon);
}

function updateScores() {  
  document.getElementById("user-score").textContent = "You: " + userScore;
  document.getElementById("tie-score").textContent = "Tie: " + tieScore;
  document.getElementById("computer-score").textContent = "Computer: " + computerScore;
}