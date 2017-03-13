import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../services/github';

@Component({
  selector: 'repo-detail',
  styleUrls: ['./styles.css'],
  templateUrl: './template.html'
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
