import { Module } from '@nestjs/common';
import { GameService } from './game/game.service';

@Module({
  providers: [GameService],
})
export class AppModule {}
