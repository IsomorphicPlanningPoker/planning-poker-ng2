import { provideRouter, RouterConfig } from '@angular/router';

import { GameRoutes }       from './game/game.routes';

const routes: RouterConfig = [
  ...GameRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
