import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

export const platformRef = platformBrowserDynamic();

export function main() {
  reutrn platformRef.bootstrapModule(AppModule)
  .catch(err => console.error(err));  
}

// support async tag or hmr
if (document.readyState === 'complete') {
  main()
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}

