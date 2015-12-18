/*
 * we are manually writing out the bundle provided in 'angular2/bundles/angular2-polyfills'
 */
import 'es6-promise';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
// in production remove long-stack-trace
import 'zone.js/lib/zones/long-stack-trace';

/*
 * we are importing angular2 to ensure that these files are bundled in vendor.js
 */
import 'angular2/platform/browser';
import 'angular2/core';
import 'angular2/http';
import 'angular2/router';
