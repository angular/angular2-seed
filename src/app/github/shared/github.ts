import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

@Injectable()
export class Github {
  constructor(private http: Http) {}

  getOrg(org: string): any { return this.makeRequest(`orgs/${org}`); }

  getReposForOrg(org: string): any { return this.makeRequest(`orgs/${org}/repos`); }

  getRepoForOrg(org: string, repo: string): any { return this.makeRequest(`repos/${org}/${repo}`); }

  private makeRequest(path: string): any {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${path}`;
    return this.http.get(url, {search: params}).map((res) => res.json());
  }
}
