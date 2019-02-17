import { Game } from './modules/Game';

window.Game = Game;
const game = new Game();
game.init();
game.start();
