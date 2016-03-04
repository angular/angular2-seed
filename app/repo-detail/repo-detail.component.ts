import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {Github} from '../repo-browser/repo-browser.service.ts';

@Component({
  selector: 'repo-detail',
  templateUrl: 'repo-detail/repo-detail.html',
  styleUrls: ['repo-detail/repo-detail.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class RepoDetail {
  repoDetails = {};
  constructor(routeParams:RouteParams, github: Github) {
    github.getRepoForOrg(routeParams.get('org'),routeParams.get('name'))
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
      });
  }

}
