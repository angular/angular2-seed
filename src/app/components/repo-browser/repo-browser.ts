import { Component } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { RepoList } from '../repo-list/repo-list';
import { RepoDetail } from '../repo-detail/repo-detail';
import { Github } from '../../services/github';

@Component({
  selector: 'repo-browser',
  pipes: [],
  providers: [ Github ],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './repo-browser.html',
  styleUrls: ['./repo-browser.css']
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
