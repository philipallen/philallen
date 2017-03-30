import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { WorkPage } from "./pages/work/work";
import { PlaygroundPage } from "./pages/playground/playground";
import { HomePage } from "./pages/home/home";
import { BlogPage } from "./pages/blog/blog";
import { Blog_AnglarMemory } from './pages/blog/blogs/blog_angular-memory';
import { Blog_FrontendEssentials } from './pages/blog/blogs/blog_frontend-essentials';
import { Blog_JavascriptInIE } from './pages/blog/blogs/blog_javascript-in-ie';
import { Blog_AngularDirectiveScope } from './pages/blog/blogs/blog_angular-directive-scope';

import { GithubReposComponent } from "./components/github-repos/github-repos.component";
import { RankingComponent } from "./components/ranking/ranking.component";

import { GithubRepoService } from './providers/github-repo-service';

import { routing } from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        BlogPage,
        WorkPage,
        PlaygroundPage,
        HomePage,
        GithubReposComponent,
        RankingComponent,
        Blog_AnglarMemory,
        Blog_FrontendEssentials,
        Blog_JavascriptInIE,
        Blog_AngularDirectiveScope
    ],
    bootstrap: [ AppComponent ],
    providers: [GithubRepoService]
})
export class AppModule { }
