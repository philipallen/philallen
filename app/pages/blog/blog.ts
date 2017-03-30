import { Component } from '@angular/core';

@Component({
    selector: 'blog',
    templateUrl: 'pages/blog/blog.html',
    styleUrls: ['pages/blog/blog.css']
})
export class BlogPage {
    constructor() {
    	public menu = false;
    	toggleMenu(): void {
    		this.menu = this.menu ? false : true;
		}
    }
}