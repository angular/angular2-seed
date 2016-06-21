import {Component} from '@angular/core';
import {Github} from '../../services/github';
import {Observable} from 'rxjs/Observable';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'repo-list',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./repo-list.css'],
  templateUrl: './repo-list.html',
})
export class RepoList {
  repos: Observable<any>;
  constructor(public github: Github, public params: RouteSegment) {}

  ngOnInit() {
    this.repos = this.github.getReposForOrg(this.params.getParam('org'));
  }
}
