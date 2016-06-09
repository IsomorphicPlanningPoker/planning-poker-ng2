import { Component, Type } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cli-planning-poker-app',
  templateUrl: 'cli-planning-poker.component.html',
  styleUrls: ['cli-planning-poker.component.css']
})
export class CliPlanningPokerAppComponent extends Type {
  title = 'cli-planning-poker works!';
}
