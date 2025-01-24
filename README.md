# Memory Match Game
Welcome to the Memory Mach Game! this is a simple yet exciting game desined to test your memory and concention skils. Mach the sequence of flashing colors to progress through increasingly challenging levels. can you beat your own high score?

FEAUTURES:
1. Interactive Gameplay: Watch and repeat the flashing color sequences.
2. Dynamic Levels: The game gets more challenging as you progress.
3. Feedback System:Get visual and sound feedback for correct or incorrect moves.
4. Responsive Design:optimizd for both desktop and mobile devices.
5. Easy Setup : No installations needed just open in your browser and play!

DEMO:
you can chack out the live version of the game here : https://suadtech.github.io/Memory-game/

HOW TO PLAY :
1. click Satrt Game to begin.
2. watch the color sequence carefully as it flashes.
3. Click the buttons in the same order as the sequence.
4. If you get it Right , you'll move to next level,where the sequeunce gets longer.
5. If you make a mistake , you'll get feedback and can try again from the same level 
The game ends when decide to stop playing or when your memory decides to give up!


RUNNING TESTS :
1. This game includes uint tests written using Jest.
2. There is screen shots on validator  img file for index.html , #style.css validtor tests.
3. I lighthoues file there is screenshoot for lighhoues result .
4. There is wireframes img file  used Balsamiq wireframes tools.

TECHNOLGY STACK :
1. HTML: Structre of the game.
2. GAVASCRIPT : Game logic and interactivity.
3. CSS: Styling and animations.
4. JEST: Testing framework.

USERS STORY 

Memory Mach GameUser
 story 1 :STARTING THE GAMEI wont to start the game as a player by clicking Start Game button to start the game .
 
 Acceptance Criteria :

* The game shows a min menu with a start Game button.
* The Game start with level one.

Tasks:

1. Start Game button must add to index.html.
2. Handel the button by writing it by javaScript.
3. Must start the game with level one.

**User** story 2****

**Game** Pattern****

As a player, I want see  flashing coloured  buttons .

**Acceptance** Criteria****

1. The game should have colors.
2. Buttons should flash in order.
3. Flashing colors should be clear visually .

**Task**

1. Create  random colour.
2. Write a flash colour function to visually .
3. adding between each button flash a delay.

**user** story3****

**Repeating** the pattern****

I wont as player to click the button in the same order as flashed pattern .

**Acceptance** Criteria****


1. The game allows me to click the buttons after the pattern is show up.
2. If i wine the level1 ,the game move me to the next level.

User story 4 : 

**Incorrect** game feedback : ****

-  I wont  as a player to receive feedback if click the wrong button to know that i made a mistake.

**Acceptance** Criteria : **** 

1.  If my order is in correct the game displays a     massage like Oops try again.
2. The game plays a wrong sound effect.
3. Resets the game and allows me to try again.

User story 5 : 

**Advancing** to the Next Level****
I wont as a player to move to next level for more challenging level when i correctly play. 

**Acceptance** Criteria****

1. If my order is correct the game displays a massage like well done! Next level.
2. When the  player win the game  return correct sound effect.

**TASK******

1. when the player completes the round display a massage like will done next level.
2. Play a correct sound effect.





