import 'reflect-metadata';
import 'zone.js';

import {platformBrowser} from '@angular/platform-browser';

import {AppModuleNgFactory} from './app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));
