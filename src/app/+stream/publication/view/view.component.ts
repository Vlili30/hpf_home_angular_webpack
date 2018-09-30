import {
	Component,
	OnInit,
	Input
} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'publication-view',
	styles: [``],
	templateUrl: 'view.component.html'
})

export class PublicationViewComponent implements OnInit {

	@Input('publication') publication: any;

	constructor(
		public route: ActivatedRoute
	) {}

	public ngOnInit() {
		this.initPublication();
	}

	initPublication() {
		this.publication.isCollapsed = this.publication.pin === 1;
	    if (!this.publication.mode) this.publication.mode='view';
	}

	onVoted(event: any) {
		this.publication.poll = event.poll;
	}

}
