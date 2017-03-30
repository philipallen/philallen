import { Route, RouterModule } from '@angular/router';

import { PlaygroundPage } from './pages/playground/playground';
import { WorkPage } from './pages/work/work';
import { HomePage } from './pages/home/home';
import { BlogPage } from './pages/blog/blog';
import { Blog_AnglarMemory } from './pages/blog/blogs/blog_angular-memory';
import { Blog_FrontendEssentials } from './pages/blog/blogs/blog_frontend-essentials';
import { Blog_JavascriptInIE } from './pages/blog/blogs/blog_javascript-in-ie';
import { Blog_AngularDirectiveScope } from './pages/blog/blogs/blog_angular-directive-scope';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomePage },
    { path: 'work', component: WorkPage,
    { path: 'blog', component: BlogPage,
	    children: [
	      { path: '', redirectTo: 'frontend-essentials', pathMatch: 'full' },
	      { path: 'angular-memory-leaks', component: Blog_AnglarMemory },
	      { path: 'frontend-essentials', component: Blog_FrontendEssentials },
	      { path: 'javascript-in-ie', component: Blog_JavascriptInIE },
	      { path: 'angular-directive-scope', component: Blog_AngularDirectiveScope }
	    ] 
	},
    { path: 'playground', component: PlaygroundPage }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
