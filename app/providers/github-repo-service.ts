import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubRepoService {

  constructor(public http: Http) {}

  getAll(): Observable<Response>{
    return this.http.get(`https://api.github.com/users/philipallen/repos`)
  }
}
