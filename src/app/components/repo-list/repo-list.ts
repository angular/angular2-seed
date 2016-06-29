import {Component} from '@angular/core';
import {Github} from '../../services/github';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'repo-list',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  template: require('./repo-list.html'),
  styles: [require('./repo-list.css')]
})
export class RepoList {
  org: string;
  repos: Observable<any>;

  constructor(public github: Github, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = params['org'];
      if (this.org) {
        this.repos = this.github.getReposForOrg(this.org);
      }
    });
  }
}
