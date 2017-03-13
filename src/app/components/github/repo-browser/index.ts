import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../../../services/github';

@Component({
  selector: 'repo-browser',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class RepoBrowserComponent {

  constructor(private router: Router, private github: GithubService) {
  }

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['/github', orgName]);
      });
  }

}
