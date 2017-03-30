import { Component } from '@angular/core';
import { GithubRepoService } from '../../providers/github-repo-service';

@Component({
    selector: 'contact',
    templateUrl: 'components/playground/playground.component.html',
    styleUrls: ['components/playground/playground.component.css']
})
export class PlaygroundComponent {
    name: string = "Playground";
    users: {};
    repos: any;

    constructor(private githubRepoService: GithubRepoService) {
		githubRepoService.getAll().subscribe(res => {
      		console.log(res.json());
      		this.repos = res.json();
	    });
    }
}
