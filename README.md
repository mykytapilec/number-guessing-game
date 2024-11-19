### Number Guessing Game

A simple and interactive Command Line Interface (CLI)-based number guessing game built using NestJS. Test your guessing skills against a randomly chosen number within a limited number of attempts, with different difficulty levels to choose from.

## Features
- Difficulty Levels: Choose between Easy, Medium, and Hard, which determine the number of chances you get.
- Feedback: Receive hints whether the secret number is greater or less than your guess.
- High Scores: Keeps track of your best attempts for each difficulty level.
- Replay Option: Play as many rounds as you like until you're ready to quit.
- Randomized Gameplay: Each game generates a new number to guess.

##  How It Works
1. The computer randomly selects a number between 1 and 100.
2. You select a difficulty level:
- Easy: 10 chances.
- Medium: 5 chances.
- Hard: 3 chances.
3. Guess the number within the allowed chances. If your guess is:
- Correct: You win the game!
- Incorrect: You'll be told if the number is higher or lower than your guess.
4. After each game, view your high scores and decide whether to play again.

## Installation
1. Clone the Repository
git clone https://github.com/mykytapilec/number-guessing-game.git
cd number-guessing-game
2. Install Dependencies
npm install
3. npm run build

## Usage
To start the game, run the following command:
node dist/main.js start

## Gameplay Example
- Welcome Message
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
Try to guess it within the allowed chances.

- Difficulty Selection
Select a difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
Enter your choice: 2
Great! You selected MEDIUM mode. You have 5 chances.

- Gameplay

Enter your guess (1/5): 50
Incorrect! The number is less than your guess.

Enter your guess (2/5): 25
Incorrect! The number is greater than your guess.

Enter your guess (3/5): 30
Congratulations! You guessed the number in 3 attempts.

- High Scores

High Scores:
Easy: None
Medium: 3 attempts
Hard: None
Would you like to play again? (y/n): y

## Project Structure
src/
├── app.module.ts        # Main application module
├── main.ts              # CLI entry point using Commander
└── game/
    ├── game.service.ts  # Game logic and high score tracking

## Customization
- Add Timer
Track the time it takes for users to guess the number by adding a start and end timer in the GameService.

- Dynamic Number Range
Modify the generateRandomNumber method to allow a customizable range, e.g., guessing numbers between 1 and 1000.

## Known Issues
- High scores are only stored in memory and will reset when the application restarts.
- Only the current year is supported for tracking high scores.

## Future Improvements
- Add persistent storage for high scores using a file or database.
- Include a hint system to narrow down guesses.
- Provide an option for players to set their own number ranges.

## Contributing
Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Author
Created by Mikita Pilets.

## Project URL
https://roadmap.sh/projects/number-guessing-game
