import {Component} from 'angular2/core';
import {Github} from '../../services/github';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'repo-list',
  templateUrl: 'app/components/repo-list/repo-list.html',
  styleUrls: ['app/components/repo-list/repo-list.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class RepoList {
  repos: Observable<any>
  constructor(github: Github, params:RouteParams) {
    this.repos = github.getReposForOrg(params.get('org'));
  }
}
