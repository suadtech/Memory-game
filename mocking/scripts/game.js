export const colors = ['red', 'blue', 'green', 'yellow'];

export function generatePattern(gamePattern) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  gamePattern.push(randomColor);
  return gamePattern;
}

export function checkPlayerSequence(playerSequence, gamePattern) {
  const currentStep = playerSequence.length - 1;

  if (playerSequence[currentStep] !== gamePattern[currentStep]) {
    return { status: 'wrong', message: 'Oops! Try again.' };
  }

  if (playerSequence.length === gamePattern.length) {
    return { status: 'correct', message: 'Well done! Next level.' };
  }

  return { status: 'in-progress', message: 'Keep going!' };
}