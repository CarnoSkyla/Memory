# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Start up

Once the app is up and running on the browser, the app will auto-navigate to the register screen.
Enter a player name on each field displayed.
Each player name entered will be used to track progress.

Once the player names have been entered, click the "Lets Play" button to start begin the memory game

### `Memory Game`

A board consisting of all 54 cards(including the Joker cards) is displayed on the screen with the scoreboard and player names.
Player 1 is auto-assigned to play first and if a two-card match is not established after an a game round, player2 is given a chance to play.

NB: A game round is a player clicking a card to view the hidden card, then replicate the process to see if the second card matches the first in color and name.

Once a match is established, the player who was playing is awarded a score of 2 initially and the score increments the more they establish more matched until the game is finished.
A match allows the player who was playing to play again.

### `The Turn Button`

The 'Its Your Turn Button' indicated who's turn it is to play by it being displayed next to the player who is playing

### `Restart`

To restart the game, The 'Restart button' on the top right corner resets the game and the process can started again

### `Exit`

To exit the game, The 'Exit' button on the right navigates to the players back to the registration screen and defaults the app.
