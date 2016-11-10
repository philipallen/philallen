import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styles: [`h1 {
		color: white;
		background: darkgray;
		padding: 20px;
	}`]
})
export class AppComponent {
    name: string = "Phil Allen";

    constructor() {}
}
