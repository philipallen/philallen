import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
		color: white;
		background: darkgray;
		padding: 20px;
	}
	`],
    template: `
	<h1>I think this {{name}} do my CV website</h1>
	<router-outlet></router-outlet>

	<a [routerLink]="['/']">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a>`,
})
export class AppComponent {
    name: string = "is how I will";

    constructor() {}
}
