import {Component} from '@angular/core';
import {Github} from '../../services/github';
import {Observable} from 'rxjs/Observable';
import {Routes, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {RepoDetail} from '../repo-detail/repo-detail';

@Component({
  selector: 'repo-list',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./repo-list.css'],
  templateUrl: './repo-list.html',
})
@Routes([
  { path: '/:name', component: RepoDetail },
])
export class RepoList {
  private org: string;
  repos: Observable<any>;

  constructor(public github: Github, public params: RouteSegment) {
    this.org = this.params.getParam('org');
  }

  ngOnInit() {
    this.repos = this.github.getReposForOrg(this.org);
  }
}
