import 'zone.js';
import 'reflect-metadata';

import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

const APP_PROVIDERS = [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
];
import 'rxjs/Rx';

import {App} from './components/app/app';

bootstrap(App, [APP_PROVIDERS])
  .catch(err => console.error(err));