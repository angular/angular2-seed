import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubService} from '../shared/github.service';

@Component({
  selector: 'repo-detail',
  styleUrls: ['./repo-detail.component.css'],
  templateUrl: './repo-detail.component.html'
})
export class RepoDetailComponent implements OnInit {
  private org:string;
  private repo:string;
  public repoDetails:any = {};

  constructor(public github:GithubService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = this.route.snapshot.parent.params['org'];
      this.repo = params['repo'] || '';

      if (this.repo) {
        this.github.getRepoForOrg(this.org, this.repo)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
          });
      }
    });
  }
}
