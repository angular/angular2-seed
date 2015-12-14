import {Component} from 'angular2/core';
import {Header} from '../header/header'


@Component({
	selector: 'app',
	template: `
	  <app-header></app-header>
		<div>Hello Angular2!</div>
	`,
	directives: [Header]
})
export class App {
	constructor(){

	}
}