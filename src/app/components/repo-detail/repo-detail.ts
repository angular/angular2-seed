import {Component, Injector} from '@angular/core';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Github} from '../../services/github';
import {RepoList} from '../repo-list/repo-list';

@Component({
  selector: 'repo-detail',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./repo-detail.css'],
  templateUrl: './repo-detail.html'
})
export class RepoDetail {
  private org: string;
  public repoDetails: any = {};

  constructor(public routeSegment: RouteSegment, public github: Github, private injector: Injector) {
    let parentComponent = this.injector.get(RepoList);
    this.org = parentComponent.org;
  }

  ngOnInit() {
    this.github.getRepoForOrg(this.org, this.routeSegment.getParam('name'))
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
      });
  }
}
