import {Component} from 'angular2/core';
import {Http} from 'angular2/http';


@Component({
  selector: 'about',
  templateUrl: 'about/about.html',
  styleUrls: ['about/about.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class About {

  constructor(http:Http) {

  }
}
