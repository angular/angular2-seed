import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-browser',
  templateUrl: 'app/components/repo-browser/repo-browser.html',
  styleUrls: ['app/components/repo-browser/repo-browser.css'],
  providers: [ Github ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
@Routes([
  { path: '/:org',       component: RepoList,  },
  { path: '/:org/:name', component: RepoDetail },
])
export class RepoBrowser {

  constructor(private router: Router, private github: Github) {}

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['/github', orgName]);
      });
  }

}
