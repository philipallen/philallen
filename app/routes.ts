import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { BlogComponent } from './components/blog/blog.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { Blog_AnglarMemory } from './components/blog/blogs/blog_angular-memory.component';
import { Blog_FrontendEssentials } from './components/blog/blogs/blog_frontend-essentials.component';
import { Blog_JavascriptInIE } from './components/blog/blogs/blog_javascript-in-ie.component';
import { Blog_JavascriptInIE } from './components/blog/blogs/blog_javascript-in-ie.component';
import { Blog_AngularDirectiveScope } from './components/blog/blogs/blog_angular-directive-scope.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'work', component: WorkComponent,
    { path: 'blog', component: BlogComponent,
	    children: [
	      { path: '', redirectTo: 'angular-memory-leaks', pathMatch: 'full' },
	      { path: 'angular-memory-leaks', component: Blog_AnglarMemory },
	      { path: 'frontend-essentials', component: Blog_FrontendEssentials },
	      { path: 'javascript-in-ie', component: Blog_JavascriptInIE },
	      { path: 'angular-directive-scope', component: Blog_AngularDirectiveScope }
	    ] 
	},
    { path: 'playground', component: PlaygroundComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
