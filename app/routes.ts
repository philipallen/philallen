import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { Blog_AnglarMemory } from './components/blog/blogs/blog_angular-memory';
import { Blog_FrontendEssentials } from './components/blog/blogs/blog_frontend-essentials';
import { AnotherComponent } from './components/blog/blogs/another.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'blog', component: BlogComponent,
	    children: [
	      { path: '', redirectTo: 'angular-memory-leaks', pathMatch: 'full' },
	      { path: 'angular-memory-leaks', component: Blog_AnglarMemory },
	      { path: 'frontend-essentials', component: Blog_FrontendEssentials },
	      { path: 'another', component: AnotherComponent }
	    ] 
	},
    { path: 'playground', component: PlaygroundComponent },
    { path: 'contact', component: ContactComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
