import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
// import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

import {App} from './app/app';


// enableProdMode()

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));
