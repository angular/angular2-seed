import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GithubService } from '../../../services/github';

@Component({
  selector: 'repo-list',
  styleUrls: ['./styles.css'],
  templateUrl: './template.html',
})
export class RepoListComponent implements OnInit {
  org: string;
  repos: Observable<any>;

  constructor(public github: GithubService, private route: ActivatedRoute) {
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
