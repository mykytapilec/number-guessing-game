import { Injectable } from '@nestjs/common';
import * as readlineSync from 'readline-sync';

@Injectable()
export class GameService {
  private highScore: { [key: string]: number } = {
    easy: Infinity,
    medium: Infinity,
    hard: Infinity,
  };

  private difficultyLevels = {
    easy: 10,
    medium: 5,
    hard: 3,
  };

  startGame() {
    console.log('Welcome to the Number Guessing Game!');
    console.log("I'm thinking of a number between 1 and 100.");
    console.log('Try to guess it within the allowed chances.');
    console.log();

    let playAgain = true;

    while (playAgain) {
      const difficulty = this.selectDifficulty();
      const maxAttempts = this.difficultyLevels[difficulty];
      console.log(`Great! You selected ${difficulty.toUpperCase()} mode. You have ${maxAttempts} chances.`);

      const secretNumber = this.generateRandomNumber(1, 100);
      const attempts = this.playRound(secretNumber, maxAttempts);

      if (attempts > 0) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        if (attempts < this.highScore[difficulty]) {
          console.log(`New high score for ${difficulty.toUpperCase()} mode!`);
          this.highScore[difficulty] = attempts;
        }
      } else {
        console.log(`You ran out of chances! The number was ${secretNumber}.`);
      }

      console.log(`High Scores:`);
      console.log(`Easy: ${this.highScore.easy === Infinity ? 'None' : this.highScore.easy} attempts`);
      console.log(`Medium: ${this.highScore.medium === Infinity ? 'None' : this.highScore.medium} attempts`);
      console.log(`Hard: ${this.highScore.hard === Infinity ? 'None' : this.highScore.hard} attempts`);

      playAgain = readlineSync.keyInYN('Would you like to play again?');
    }

    console.log('Thanks for playing! Goodbye!');
  }

  private selectDifficulty(): string {
    console.log('Select a difficulty level:');
    console.log('1. Easy (10 chances)');
    console.log('2. Medium (5 chances)');
    console.log('3. Hard (3 chances)');

    const choice = readlineSync.questionInt('Enter your choice: ');
    if (choice === 1) return 'easy';
    if (choice === 2) return 'medium';
    if (choice === 3) return 'hard';

    console.log('Invalid choice. Defaulting to Easy.');
    return 'easy';
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private playRound(secretNumber: number, maxAttempts: number): number {
    let attempts = 0;

    while (attempts < maxAttempts) {
      const guess = readlineSync.questionInt(`Enter your guess (${attempts + 1}/${maxAttempts}): `);
      attempts++;

      if (guess === secretNumber) {
        return attempts;
      } else if (guess > secretNumber) {
        console.log('Incorrect! The number is less than your guess.');
      } else {
        console.log('Incorrect! The number is greater than your guess.');
      }
    }

    return 0; // Return 0 if the user runs out of chances
  }
}
