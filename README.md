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
- **\_update()**: Updates the game state and renders changes on the canvas.
- **\_generateDroplets()**: Generates droplets at regular intervals.
- **\_drawDroplets()**: Draws droplets on the canvas.
- **\_drawMinions()**: Draws the minion character on the canvas.
- **\_assignControls()**: Assigns keyboard controls to move the minion character.
- **\_checkCollisions()**: Checks for collisions between the minion character and droplets.
- **\_clean()**: Clears the canvas for redrawing.
- **\_gameOver()**: Displays the game over screen and stops the game loop.
- **\_WinTheGame()**: Displays the victory screen and stops the game loop.
- **\_writeScore()**: Writes the current score on the canvas.
- **\_checkJump()**: Checks and handles minion character's jump action.

### scripts.js

Contains all the DOM manipulation code to start the game.

- **window.onload**: Loads the game when the window is fully loaded.
- **startButton.onclick**: Event listener for the start button, hides the start page and initializes the game.
- **tryWinButton.onclick**: Event listener for the try again button on the victory screen, reloads the page to restart the game.
- **tryLoseButton.onclick**: Event listener for the try again button on the game over screen, reloads the page to restart the game.

### Droplet.js

This file contains the definition of the `Droplet` class, representing the raindrops falling within the game. These droplets can either act as obstacles or bonuses and are initially positioned randomly within the canvas.

#### Properties:

- **x**: The horizontal position of the droplet on the canvas.
- **y**: The vertical position of the droplet on the canvas.
- **width**: The width of the droplet.
- **height**: The height of the droplet.
- **role**: The role of the droplet, which can be either "obstacle" or "bonus".
- **image**: The image representing the droplet on the canvas.
- **fallInterval**: The interval between droplet falls.
- **speed**: The speed at which the droplet falls.

#### Methods:

- **\_fallDown()**: Initiates continuous falling of the droplet within the canvas until it reaches the bottom.
- **\_assignRole()**: Assigns a role (obstacle or bonus) to the droplet based on a random probability.
- **\_assignImage()**: Assigns an image to the droplet based on the assigned role (obstacle or bonus).

### assets.js

This file contains the asset definitions used in the game, including images for minions, bonuses, and obstacles.

#### Minions:

- **minions**: Image for the minions character.
  - Source: `"../assets/img/minions.png"`

#### Bonuses:

- **bonusOne**: Image for the first bonus.
  - Source: `"../assets/img/bonus1.png"`
- **bonusTwo**: Image for the second bonus.
  - Source: `"../assets/img/bonus2.png"`

#### Obstacles:

- **obstacleOne**: Image for the first obstacle.
  - Source: `"../assets/img/obstacle1.png"`
- **obstacleTwo**: Image for the second obstacle.
  - Source: `"../assets/img/obstacle2.png"`

#### Image Arrays:

- **obstaclesImage**: Array containing images for obstacles.
  - Contents: `[obstacleOne, obstacleTwo]`
- **bonusImage**: Array containing images for bonuses.
  - Contents: `[bonusOne, bonusTwo]`

### player.js

This file contains the definition of the `Player` class, representing the player character in the game.

#### Properties:

- **image**: Image of the player character (minions).
- **x**: Initial horizontal position of the player.
- **y**: Initial vertical position of the player.
- **height**: Height of the player character.
- **width**: Width of the player character.

#### Methods:

- **moveRight()**: Moves the player character to the right.
- **moveLeft()**: Moves the player character to the left.
- **moveUp()**: Moves the player character upwards.
- **moveDown()**: Moves the player character downwards.
- **\_increase()**: Increases the size of the player character.
- **\_decrease()**: Decreases the size of the player character.

## Useful links

<!-- When you finish, add these links and commit -->

- [Presentation slides]()
- [Deployed game]()
