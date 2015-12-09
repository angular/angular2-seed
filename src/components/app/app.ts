import {Component} from 'angular2/angular2';
import {Header} from '../header/header'

@Component({
	selector: 'app',
	template: `
	  <app-header></app-header>
		<div>Hello Angular2!</div>
	`,
	directives: [Header]
})
export class App {}