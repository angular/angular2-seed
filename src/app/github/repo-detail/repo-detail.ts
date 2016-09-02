import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Github} from '../shared/github';

@Component({
  selector: 'repo-detail',
  styleUrls: ['./repo-detail.css'],
  templateUrl: './repo-detail.html'
})
export class RepoDetail implements OnInit {
  private org:string;
  private repo:string;
  public repoDetails:any = {};

  constructor(public github:Github, private route:ActivatedRoute) {
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
