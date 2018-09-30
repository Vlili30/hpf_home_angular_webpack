import {
	Component,
	OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NetworkService } from './network.service';
import {Network} from './network';

console.log('`Network component loaded asynchronously');

@Component({
	selector: 'network',
	templateUrl: 'network.component.html'
})
export class NetworkComponent implements OnInit {

	public network: Network;
	public loading: boolean;

	constructor(
		public _activatedRoute: ActivatedRoute,
		private _networkService: NetworkService
	) { }

	ngOnInit() {
		this.loading = true;
        this.getNetwork();
	}

	getNetwork() {
        this._activatedRoute.params.subscribe(routeParams => {
    		this._networkService.getNetwork(routeParams.id).subscribe(
    			(network:Network) => {
    				this.network = network;
    				this.loading = false;
    			},
    			err => console.error(err),
    			() => console.log('done loading network')
    		);
        });
	}

}
