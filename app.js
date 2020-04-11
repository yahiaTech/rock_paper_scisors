const intro = document.querySelector(".intro");
const game = document.querySelector(".match");
const play = document.querySelector(".intro button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const cisors = document.querySelector(".cisors");
const playerScore = document.querySelector(".playerscore p");
const computerScore = document.querySelector(".computerscore p");
const winner = document.querySelector(".winner");
const playerImage = document.querySelector(".player-hand");
const computerImage = document.querySelector(".computer-hand");
play.addEventListener("click", fade);
rock.addEventListener("click", rockCkick);
paper.addEventListener("click", paperClick);
cisors.addEventListener("click", cissorsClick);

function fade() {
  intro.classList.add("fade-out");
  game.classList.add("fade-in");
}
function changeComputerHand(value) {
  if (value === 1) {
    computerImage.src = "assets/rock.png";
  } else if (value === 2) {
    computerImage.src = "assets/paper.png";
  } else {
    computerImage.src = "assets/cisors.png";
  }
}
function incrimentScore(element) {
  element.textContent = parseInt(element.textContent) + 1;
}

function comparScore(result) {
  if (result === "draw") {
    winner.textContent = "it's a draw! try again";
  } else if (result === "losse") {
    winner.textContent = "you suck!";
    incrimentScore(computerScore);
  } else {
    winner.textContent = "you rock!";
    incrimentScore(playerScore);
  }
}

function rockCkick() {
  playerImage.src = "assets/rock.png";
  const computerValue = Math.floor(Math.random() * 3 + 1);
  changeComputerHand(computerValue);
  if (computerValue === 1) {
    comparScore("draw");
  } else if (computerValue === 2) {
    comparScore("losse");
  } else {
    comparScore("win");
  }
}

function paperClick() {
  playerImage.src = "assets/paper.png";
  const computerValue = Math.floor(Math.random() * 3 + 1);
  changeComputerHand(computerValue);
  if (computerValue === 1) {
    comparScore("win");
  } else if (computerValue === 2) {
    comparScore("draw");
  } else {
    comparScore("losse");
  }
}

function cissorsClick() {
  playerImage.src = "assets/cisors.png";
  const computerValue = Math.floor(Math.random() * 3 + 1);
  changeComputerHand(computerValue);
  if (computerValue === 1) {
    comparScore("losse");
  } else if (computerValue === 2) {
    comparScore("win");
  } else {
    comparScore("draw");
  }
}
