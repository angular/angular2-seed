import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@RouteConfig([
  new Route({ path: '/home',       component: Home,        name: 'Home', useAsDefault: true }),
  new Route({ path: '/about',      component: About,       name: 'About' }),
  new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser' }),
])
export class SeedApp {

  constructor() {}

}
