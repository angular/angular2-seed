import {Component} from '@angular/core';
import {Github} from '../../services/github';
import {Observable} from 'rxjs/Observable';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'repo-list',
  templateUrl: 'app/components/repo-list/repo-list.html',
  styleUrls: ['app/components/repo-list/repo-list.css'],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoList {
  repos: Observable<any>;
  constructor(public github: Github, public params: RouteSegment) {}

  ngOnInit() {
    this.repos = this.github.getReposForOrg(this.params.getParam('org'));
  }
}
