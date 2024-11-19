import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Command } from 'commander';
import { GameService } from './game/game.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const gameService = app.get(GameService);

  const program = new Command();
  program
    .name('number-guessing-game')
    .description('A CLI-based number guessing game')
    .version('1.0.0');

  program
    .command('start')
    .description('Start the number guessing game')
    .action(() => {
      gameService.startGame();
    });

  await program.parseAsync(process.argv);
}

bootstrap();
