import { Game } from './game.interface';

export class GameService {

  static createGame(state: Game = { name: '' }, payload: { game: Game }): Game {
    return Object.assign({}, payload.game);
  }

  static getGame(state: Game, payload: { game: Game }): Game {
    return Object.assign({}, payload.game);
  }

}
