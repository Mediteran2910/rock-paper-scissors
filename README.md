# Rock, Paper, Scissors Game

This is a simple web-based Rock, Paper, Scissors game implemented using Node.js and Express.js.

## Overview

This project is a web application that allows users to play the classic Rock, Paper, Scissors game against a computer opponent. The game keeps track of the user's score and displays the outcome of each round.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- JavaScript for implementing game logic
- CSS for styling
- express-session for session management

## How to Run

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running `npm install`.
4. Start the server by running `node app.js`.
5. Open your web browser and go to `http://localhost:8080/homepage` to access the application.

## Gameplay

- Visit the homepage to start playing.
- Click on the buttons to select your move (Rock, Paper, or Scissors).
- The computer will randomly select its move.
- The outcome of the round will be displayed, and your score will be updated accordingly.
- The game continues until one player reaches a score of 3.

## Rules

- Each round is played by selecting either Rock, Paper, or Scissors.
- Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.
- The first player to reach a score of 3 wins the game.

## Additional Features

- Rules page: Provides a brief overview of how to play the game.
- Error handling: Includes custom error pages for 404 and 500 errors.

## License

This project is licensed under the [MIT License](LICENSE).
