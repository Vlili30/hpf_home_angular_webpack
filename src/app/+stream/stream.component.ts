import {
	Component,
	OnInit
} from '@angular/core';
import { StreamService } from './stream.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'stream',
	styles: [``],
	templateUrl: 'stream.component.html'
})
export class StreamComponent implements OnInit {

	public stream: any;
	public loading: boolean;

	constructor(
		public route: ActivatedRoute,
		private _streamService: StreamService
	) {}

	public ngOnInit() {
		this.loading = true;
		this.getStream();
	}

	getStream() {
		this._streamService.getStream().subscribe(
			data => {
				this.stream = data;
				this.loading = false;
			},
			err => console.error(err),
			() => console.log('done loading stream')
		);
	}

}
