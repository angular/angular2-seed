import {Component} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'about',
  pipes: [],
  providers: [],
  directives: [],
  template: require('./about.html'),
  styles: [require('./about.css')]
})
export class About {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
