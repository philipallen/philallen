import { Component } from '@angular/core';
import { GithubRepoService } from '../../providers/github-repo-service';

@Component({
    selector: 'github-repos',
    templateUrl: 'components/github-repos/github-repos.component.html',
    styleUrls: ['components/github-repos/github-repos.component.css']
})
export class GithubReposComponent {
    repos: any;

    constructor(private githubRepoService: GithubRepoService) {
		githubRepoService.getAll().subscribe(res => {
      		console.log(res.json());
      		this.repos = res.json();
	    });
    }
}
