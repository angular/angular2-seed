import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-detail',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  template: require('./repo-detail.html'),
  styles: [require('./repo-detail.css')]
})
export class RepoDetail {
  private org:string;
  private repo:string;
  public repoDetails:any = {};

  constructor(public github:Github, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = this.router.routerState.parent(this.route).snapshot.params['org'];
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
