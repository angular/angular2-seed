import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';

import {App} from './app/components/app';

bootstrap(App)
  .catch(err => console.error(err));