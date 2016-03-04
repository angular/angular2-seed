import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home/home.component';
import {About} from './about/about.component';
import {RepoBrowser} from './repo-browser/repo-browser.component';

@Component({
  selector: 'seed-app',
  providers: [],
  templateUrl: 'seed-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/about', component: About, name: 'About'}),
  new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])
export class SeedApp {

  constructor() {}

}
