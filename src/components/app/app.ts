import {Component} from 'angular2/angular2';
import {Header} from '../header/header'
import {Http} from 'angular2/http'

@Component({
	selector: 'app',
	template: `
	  <app-header></app-header>
		<div>Hello Angular2!</div>
	`,
	directives: [Header]
})
export class App {
	constructor(http:Http){
		http.get('data.json')
		  .map(res => res.json())
			.subscribe(v => console.log(v));
	}
}