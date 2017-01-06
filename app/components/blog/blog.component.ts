import { Component } from '@angular/core';

@Component({
    selector: 'blog',
    templateUrl: 'components/blog/blog.component.html',
    styleUrls: ['components/blog/blog.component.css']
})
export class BlogComponent {
    constructor() {
    	public menu = false;
    	toggleMenu(): void {
    		this.menu = this.menu ? false : true;
		}
    }
}