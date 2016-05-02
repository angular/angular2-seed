import {Component} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
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
  constructor(public routeParams: RouteParams, public github: Github) {}

  ngOnInit() {
    this.github.getRepoForOrg(this.routeParams.get('org'), this.routeParams.get('name'))
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
      });

  }

}
