import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { BlogComponent } from "./components/blog/blog.component";
import { WorkComponent } from "./components/work/work.component";
import { PlaygroundComponent } from "./components/playground/playground.component";
import { routing } from "./routes";
import { HomeComponent } from "./components/home/home.component";
import { RankingComponent } from "./components/ranking/ranking.component";
import { Blog_AnglarMemory } from './components/blog/blogs/blog_angular-memory';
import { Blog_FrontendEssentials } from './components/blog/blogs/blog_frontend-essentials';
import { Blog_JavascriptInIE } from './components/blog/blogs/blog_javascript-in-ie.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        BlogComponent,
        WorkComponent,
        PlaygroundComponent,
        HomeComponent,
        RankingComponent,
        Blog_AnglarMemory,
        Blog_FrontendEssentials,
        Blog_JavascriptInIE
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
