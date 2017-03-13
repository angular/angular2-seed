import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from '../app.routes';
import { GithubService } from '../services/github';
import { AppComponent } from '../components/app';
import { AboutComponent } from '../components/about';
import { HomeComponent } from '../components/home';
import { RepoBrowserComponent } from '../components/github/repo-browser';
import { RepoListComponent } from '../components/github/repo-list';
import { RepoDetailComponent } from '../components/github/repo-detail';
import { ContactComponent } from '../components/contact';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
