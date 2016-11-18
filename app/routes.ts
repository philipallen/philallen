import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { Blog_AnglarMemory } from './components/blog/blogs/blog_angular-memory';
import { AnotherComponent } from './components/blog/blogs/another.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'blog', component: BlogComponent,
	    children: [
	      { path: '', redirectTo: 'angular-memory-leaks', pathMatch: 'full' },
	      { path: 'angular-memory-leaks', component: Blog_AnglarMemory },
	      { path: 'another', component: AnotherComponent }
	    ] 
	}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
