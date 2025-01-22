// Initialize global game state
global.level = 0;
global.playerSequence = [];
global.gamePattern = [];

function startGame() {
   global.level = 1;
   global.playerSequence = [];
   global.gamePattern = [];
}

function generatePattern() {
   const colors = ['red', 'blue', 'green', 'yellow'];
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
   global.gamePattern.push(randomColor);
}

function checkPlayerSequence() {
   for (let i = 0; i < global.playerSequence.length; i++) {
       if (global.playerSequence[i] !== global.gamePattern[i]) {
           return false;
       }
   }
   return true;
}

module.exports = { startGame, generatePattern, checkPlayerSequence };

