import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { routing } from "./routes";
import { HomeComponent } from "./components/home/home.component";
import { RankingComponent } from "./components/ranking/ranking.component";
import { OverviewComponent } from './components/about/overview.component';
import { AnotherComponent } from './components/about/another.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        RankingComponent,
        OverviewComponent,
        AnotherComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
