import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'components/playground/playground.component.html',
    styleUrls: ['components/playground/playground.component.css']
})
export class PlaygroundComponent {
    name: string = "Playground";
    users: {};

    constructor() {}
}