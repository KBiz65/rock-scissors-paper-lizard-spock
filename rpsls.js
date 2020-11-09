const weapons = [
  {
    name: "scissors",
    beats: [
      { victim: "paper", statement: "Scissors Cuts Paper!" },
      { victim: "lizard", statement: "Scissors Decapitates Lizard!" }],
  },
  {
    name: "paper",
    beats: [
      { victim: "rock", statement: "Paper Covers Rock!" },
      { victim: "spock", statement: "Paper Disproves Spock!" }],
  },
  {
    name: "rock",
    beats: [
      { victim: "lizard", statement: "Rock Crushes Lizard!" },
      { victim: "scissors", statement: "Rock Crushes Scissors!" }],
  },
  {
    name: "lizard",
    beats: [
      { victim: "spock", statement: "Lizard Poisons Spock!" },
      { victim: "paper", statement: "Lizard Eats Paper!" }],
  },
  {
    name: "spock",
    beats: [
      { victim: "scissors", statement: "Spock Smashes Scissors!" },
      { victim: "rock", statement: "Spock Vaporizes Rock!" }],
  },
];

const userVictims = [];
const computerVictims = [];
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

const userWeaponOptions = document.getElementById("weapon-images");
userWeaponOptions.addEventListener("click", function (e) {
  userChoice = e.target.id;
  whoWins(userChoice);
});

function whoWins(userChoice) {
  const computerChoice = computerChooses();
  const winnerDisplay = document.getElementById("whoWinsText");
  
  getVictims(userVictims, userChoice);
  getVictims(computerVictims, computerChoice);
  
  displayImageChoices(userChoice, computerChoice);

  if (computerChoice === userChoice) {
    tieScore++;
    winnerDisplay.textContent = "It's a tie!"
    updateScores();
    return 0;
  }
  
  for (i = 0; i < userVictims.length; i++) {
    if (userVictims[i].victim === computerChoice) {
      userScore++
      winnerDisplay.textContent = ("You win: " + userVictims[i].statement);
      updateScores();
      return 0;
    }
  }
  
  for (i = 0; i < computerVictims.length; i++) {
    if (computerVictims[i].victim === userChoice) {
      computerScore++
      winnerDisplay.textContent = ("Computer wins: " + computerVictims[i].statement)
      updateScores();
      return 0;
    }
  }
}

function computerChooses() {
  const randomChoice = Math.floor(Math.random() * 5);
  const weaponArray = weapons[randomChoice];
  const compWeaponName = weaponArray["name"];

  return compWeaponName;
}

function getVictims(arr, weaponChoice) {
  for (i = 0; i < weapons.length; i++) {
    if (weaponChoice === weapons[i].name) {
      arr.splice(0, arr.length);
      arr.push(weapons[i]["beats"][0]);
      arr.push(weapons[i]["beats"][1]);
    }
  }
  return 0;
}

function displayImageChoices (userChoice="rock", computerChoice) {
  const userImageContainer = document.getElementById("userChoiceImage");
  const userWeaponImage = document.createElement("img");
  const compImagecontainer = document.getElementById("computerChoiceImage");
  const compWeaponImage = document.createElement("img");

  const currentUserWeaponImage = document.getElementById("userChoicePng");
  const currentCompWeaponImage = document.getElementById("compChoicePng");
  
  if (currentUserWeaponImage) {
    currentUserWeaponImage.remove();
  }

  if (currentCompWeaponImage) {
    currentCompWeaponImage.remove();
  }

  userWeaponImage.setAttribute("id", "userChoicePng"); 
  userWeaponImage.src = "images/" + userChoice + ".png";
  userImageContainer.appendChild(userWeaponImage); 

  compWeaponImage.setAttribute("id", "compChoicePng"); 
  compWeaponImage.src = "images/" + computerChoice + ".png";
  compImagecontainer.appendChild(compWeaponImage); 

}

function updateScores() {
  const userScoreDisplay = document.getElementById("userScore");
  const computerScoreDisplay = document.getElementById("computerScore");
  const tieScoreDisplay = document.getElementById("tieScore");
  
  userScoreDisplay.textContent = ("You: " + userScore);
  tieScoreDisplay.textContent = ("Tie: " + tieScore);
  computerScoreDisplay.textContent = ("Computer: " + computerScore);
}