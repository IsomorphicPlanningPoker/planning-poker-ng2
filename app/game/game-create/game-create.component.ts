import { Component } from '@angular/core';
import { GameUIEndpoint } from '../game.endpoint';

@Component({
  moduleId: module.id,
  selector: 'game-create',
  templateUrl: './game-create.component.html'
})
export class GameCreateComponent {

  constructor(private _gameEndpoint: GameUIEndpoint){

  }

  createGame(name){
    this._gameEndpoint.createGame({name: name, owner: 'fake'})
      .subscribe((res) => console.log(res));
  }

}
