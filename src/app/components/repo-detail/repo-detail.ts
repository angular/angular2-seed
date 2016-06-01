import {Component} from '@angular/core';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-detail',
  templateUrl: 'app/components/repo-detail/repo-detail.html',
  styleUrls: ['app/components/repo-detail/repo-detail.css'],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoDetail {
  repoDetails = {};
  constructor(public routeSegment: RouteSegment, public github: Github) {}

  ngOnInit() {
    this.github.getRepoForOrg(this.routeSegment.getParam('org'), this.routeSegment.getParam('name'))
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
      });

  }

}
