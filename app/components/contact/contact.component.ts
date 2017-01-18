import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'components/contact/contact.component.html',
    styleUrls: ['components/contact/contact.component.css']
})
export class ContactComponent {
    name: string = "Contact";
    users: {};

    constructor() {}
}