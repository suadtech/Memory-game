import { generatePattern, checkPlayerSequence } from '../../scripts/game.js';

describe('generatePattern', () => {
  test('adds a random color to the game pattern', () => {
    const gamePattern = [];
    generatePattern(gamePattern);
    expect(gamePattern.length).toBe(1);
    expect(['red', 'blue', 'green', 'yellow']).toContain(gamePattern[0]);
  });
});

describe('checkPlayerSequence', () => {
  test('returns "correct" if the player sequence matches the game pattern', () => {
    const playerSequence = ['red', 'blue'];
    const gamePattern = ['red', 'blue'];
    const result = checkPlayerSequence(playerSequence, gamePattern);
    expect(result.status).toBe('correct');
    expect(result.message).toBe('Well done! Next level.');
  });

  test('returns "wrong" if the player sequence does not match the game pattern', () => {
    const playerSequence = ['red', 'green'];
    const gamePattern = ['red', 'blue'];
    const result = checkPlayerSequence(playerSequence, gamePattern);
    expect(result.status).toBe('wrong');
    expect(result.message).toBe('Oops! Try again.');
  });
});