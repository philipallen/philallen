import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OverviewComponent } from './components/about/overview.component';
import { AnotherComponent } from './components/about/another.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'about', component: AboutComponent,
	    children: [
	      { path: '', redirectTo: 'overview', pathMatch: 'full' },
	      { path: 'overview', component: OverviewComponent }
	      { path: 'another', component: AnotherComponent }
	    ] 
	}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
