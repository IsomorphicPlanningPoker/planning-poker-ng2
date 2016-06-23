import {GameDetailComponent} from './game-detail/game-detail.component';
import {GameCreateComponent} from './game-create/game-create.component';
import { GameComponent } from './game.component';
// import { CrisisListComponent }   from './crisis-list.component';
// import { CrisisCenterComponent } from './crisis-center.component';
// import { CrisisDetailGuard }     from './crisis-detail.guard';

export const GameRoutes = [
  {
    path: '/game',
    component: GameComponent,
    index: true,
    children: [
      { path: '/create', component: GameCreateComponent, index: true },
      { path: '/:id', component: GameDetailComponent }//, canDeactivate: [CrisisDetailGuard]
    ]
  }
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
