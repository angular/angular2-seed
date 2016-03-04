import {Component} from 'angular2/core';
import {Router, RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

import {RepoList} from '../repo-list/repo-list.component';
import {RepoDetail} from '../repo-detail/repo-detail.component';
import {Github} from './repo-browser.service.ts';

@Component({
  selector: 'repo-browser',
  templateUrl: 'repo-browser/repo-browser.html',
  styleUrls: ['repo-browser/repo-browser.css'],
  providers: [Github],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
	new Route({path: '/:org', component: RepoList, name: 'RepoList'}),
	new Route({path: '/:org/:name', component: RepoDetail, name: 'RepoDetail' })
])
export class RepoBrowser {

  constructor(private router:Router, private github: Github) {}

  searchForOrg(orgName: string){
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['RepoList', {org: orgName}])
      })
  }

}
