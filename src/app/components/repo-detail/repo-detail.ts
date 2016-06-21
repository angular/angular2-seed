import {Component} from '@angular/core';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-detail',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./repo-detail.css'],
  templateUrl: './repo-detail.html'
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
