import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ranking',
    templateUrl: 'components/ranking/ranking.component.html',
    styleUrls: ['components/ranking/ranking.component.css']
})
export class RankingComponent {
	@Input() title :string;
	@Input() rating :number;

    constructor() {
    }
}