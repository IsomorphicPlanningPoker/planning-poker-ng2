import { GameUIEndpoint } from './game.endpoint';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: './game.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [GameUIEndpoint]
})
export class GameComponent {

}
