import {
  Component,
  OnInit
} from '@angular/core';
import { StuctureService } from './networks.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'networks',
  styles: [``],
  templateUrl: 'networks.component.html'
})
export class NetworksComponent implements OnInit {

  public localState: any;
  public structure: any;
  public loading: boolean;

  constructor(
    public route: ActivatedRoute,
    private _stuctureService: StuctureService
  ) {}

  public ngOnInit() {
    this.getStructure();
  }

  getStructure() {
    this.loading = true;
    this._stuctureService.getStucture().subscribe(
      data => {
        this.structure = data;
        this.loading = false;
      },
      err => console.error(err),
      () => console.log('done loading structure')
    );
  }

}
