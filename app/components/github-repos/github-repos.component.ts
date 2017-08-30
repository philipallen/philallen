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
      		this.repos = res.json();
        });
        //when offline:
        // this.repos = [
        //     { name: 'test', description: 'some description', html_url: 'http://google.co.uk' },
        //     { name: 'another', description: 'some other description', html_url: 'http"//bbc.com' }
        // ]
    }

    openUrl(route: string): void {
        window.open(route);
    }
}
