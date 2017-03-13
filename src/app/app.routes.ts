import { Routes } from '@angular/router';

import { AboutComponent } from './components/about';
import { HomeComponent } from './components/home';
import { RepoBrowserComponent } from './components/github/repo-browser';
import { RepoListComponent } from './components/github/repo-list';
import { RepoDetailComponent } from './components/github/repo-detail';
import { ContactComponent } from './components/contact';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];

