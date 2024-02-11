# Game name

<!-- When you finish, add a nice screenshot of your game -->
<!--[<img src="./img/page.png">]()-->

## Description

In a distant land, filled with challenges and surprises, the Minions embark on an exciting adventure. In the game Minions Adventure, you will guide a Minion through an endless world, filled with obstacles and bonuses.

Get ready for a thrilling journey, where you'll face unexpected challenges while aiming to achieve ever-greater distances. Dodge obstacles, collect bonuses, and prove that you're the best guide for the adorable Minions!

## User stories MVP

Minimum user stories:

 - The player starts the game by clicking the start button.
 - The player can move the Minion left and right to dodge objects.
 - The player can make the Minion jump up and down.
 - The player must collect coins to earn points.
 - The player loses points upon colliding with obstacles.
 
## User stories Backlog

- The player can unlock new characters.
- Inclusion of different stages with progressively increasing difficulty.
- Addition of power-ups to aid the player.
- Implementation of an online ranking system to compete with other players.

<!-- ## File structure

- <code>game.js</code>: contains all the elements for the game to work. Methods: start(), \_update()
- <code>scripts.js</code>: contains all the DOM manipulation code to start the game -->

## File Structure

### game.js

Contains all the elements for the game to work.

#### Methods:

- **start()**: Initializes and starts the game loop.
- **_update()**: Updates the game state and renders changes on the canvas.
- **_generateDroplets()**: Generates droplets at regular intervals.
- **_drawDroplets()**: Draws droplets on the canvas.
- **_drawMinions()**: Draws the minion character on the canvas.
- **_assignControls()**: Assigns keyboard controls to move the minion character.
- **_checkCollisions()**: Checks for collisions between the minion character and droplets.
- **_clean()**: Clears the canvas for redrawing.
- **_gameOver()**: Displays the game over screen and stops the game loop.
- **_WinTheGame()**: Displays the victory screen and stops the game loop.
- **_writeScore()**: Writes the current score on the canvas.
- **_checkJump()**: Checks and handles minion character's jump action.

### scripts.js

Contains all the DOM manipulation code to start the game.

- **window.onload**: Loads the game when the window is fully loaded.
- **startButton.onclick**: Event listener for the start button, hides the start page and initializes the game.
- **tryWinButton.onclick**: Event listener for the try again button on the victory screen, reloads the page to restart the game.
- **tryLoseButton.onclick**: Event listener for the try again button on the game over screen, reloads the page to restart the game.


## Useful links

<!-- When you finish, add these links and commit -->

- [Presentation slides]()
- [Deployed game]()
