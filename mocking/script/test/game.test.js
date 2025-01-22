/**
* @jest-environment jsdom
*/
const { startGame, generatePattern, checkPlayerSequence } = require('../script/game');
beforeAll(() => {
   global.level = 0;
   global.playerSequence = [];
   global.gamePattern = [];
});

describe('Memory Game Tests', () => {
   test('Start Game resets game state', () => {
       startGame();
       expect(global.level).toBe(1);
       expect(global.playerSequence).toEqual([]);
       expect(global.gamePattern).toEqual([]);
   });

   test('Generate Pattern adds a new color to the gamePattern', () => {
       generatePattern();
       expect(global.gamePattern.length).toBe(1);
       expect(['red', 'blue', 'green', 'yellow']).toContain(global.gamePattern[0]);
   });

   test('Check Player Sequence correctly verifies the sequence', () => {
       global.gamePattern = ['red', 'blue', 'green'];
       global.playerSequence = ['red', 'blue', 'green'];
       expect(checkPlayerSequence()).toBe(true);
   });

   test('Check Player Sequence returns false for incorrect sequences', () => {
       global.gamePattern = ['red', 'blue', 'green'];
       global.playerSequence = ['red', 'blue', 'yellow'];
       expect(checkPlayerSequence()).toBe(false);
   });
});