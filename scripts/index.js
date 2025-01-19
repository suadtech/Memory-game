let level = 1;
let playerSequence=[];
let gamePattern = [];
const colors = ['red','blue','green','yellow'];
const patternDislay = document.getElementById('patternDisplay');
const gameButtons = document.querySelectorAll('game-btn');
const feedback = document.getElementById('feedback');

function startGame(){
    level1 =1;
    gamePatyern =[];
    playerSequence =[];
    document.getElementById('level1').innerText = level1;
    document.getElementById('mainMenu').classList.add('hidden')
    document.getElementById('gameArea').classList.remove('hidden');
    generatePattern();
}

function generatePattern(){
    gamePattern.push(colors[Math.random()*4]);
    displayPattern();
}

function displayPattern() {
    patternDisplay.innerHTML = '';
    gamePattern.forEach((color, index) => {
        const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.classList.add('pattern-step');
    patternDisplay.appendChild(colorDiv);
    setTimeout(() => {
      colorDiv.classList.add('hidden');
    }, index * 1000);
  });
  setTimeout(() => {
    patternDisplay.innerHTML = '';
  }, gamePattern.length * 1000);
}

function handlePlayerInput(color) {
    playerSequence.push(color);
 // Check if player's sequence matches the game pattern
 if (playerSequence.join('') === gamePattern.join('')) {
    feedback.innerText = 'Correct!';
    feedback.classList.add('feedback-correct');
    setTimeout(() => {
      level++;
      document.getElementById('level').innerText = level;
      playerSequence = [];
      generatePattern();
    }, 1000);
  } else if (playerSequence.join('') !== gamePattern.slice(0, playerSequence.length).join('')) {
    feedback.innerText = 'Incorrect! Try again!';
    feedback.classList.add('feedback-incorrect');
    setTimeout(() => {
      feedback.classList.remove('feedback-incorrect');
      playerSequence = [];
      generatePattern();
    }, 1000);
  }
}

// Attach event listeners to game buttons
gameButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      handlePlayerInput(e.target.dataset.color);
    });
  });
