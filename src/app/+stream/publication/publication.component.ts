import {
	Component,
	OnInit,
	Input
} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'publication',
	styles: [``],
	templateUrl: 'publication.component.html'
})

export class PublicationComponent implements OnInit {

	@Input('data') publication: any;

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

}
