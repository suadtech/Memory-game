//Game Variables
let level = 1;
let playerSequence=[];
let gamePattern = [];
const colors = ['red','blue','green','yellow'];
const feedback = document.getElementById('feedback');
const gameButtons = document.querySelectorAll('.game-btn');

//   function to play sound 
function playFeedbackSound(outcome) {
  const audio =new Audio(`sounds/${outcome}.mb3`)
  audio.play();
}

// Start Game
function startGame() {
  level = 1;
  playerSequence = [];
  gamePattern = [];
  document.getElementById('level').innerText = level;
  document.getElementById('mainMenu').classList.add('hidden');
  document.getElementById('gameArea').classList.remove('hidden');
  generatePattern();
}

// Generate Pattern
function generatePattern() {
  const randomColor = colors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);
  displayPattern();
}
// Display Pattern
function displayPattern() {
  gamePattern.forEach((color, index) => {
    setTimeout(() => {
      flashColor(color);
    }, index * 1000);
  });
}

// Flash Color 
function flashColor(color) {
  const button = document.querySelector(`.game-btn[data-color="${color}"]`);
  button.classList.add('flash');
  setTimeout(() => {
    button.classList.remove('flash');
  }, 500);
}


// Check Player Input 
gameButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const color = e.target.dataset.color;
    playerSequence.push(color);
    checkPlayerSequence();
  });
});

// delay Feedback
setTimeout(() => playFeedbackSound( 'correct'), 500);
 
// Check Player Sequence
function checkPlayerSequence() {
  const currentStep = playerSequence.length - 1;
  
  // Chech if the incurrent step is incorrect
  if (playerSequence[currentStep] !== gamePattern[currentStep]) {
    feedback.textContent = 'Oops! Try again.';
    playFeedbackSound('wrong');
    playerSequence = [];
    return;
  }
// Chech if the player finishes the sequence correctly
  if (playerSequence.length === gamePattern.length) {
    feedback.textContent = 'Welldone! Next level.';
    playFeedbackSound('correct')
    setTimeout (() => {
      level++;
      document.getElementById('level').innerText = level;
      playerSequence = [];
      generatePattern();
    }, 1000);
  }
}


